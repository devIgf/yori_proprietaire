import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: maplibregl.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.remove(); // Nettoie la carte lors de la destruction du composant
  }

  private initMap(): void {
    if (!this.mapContainer?.nativeElement) return;

    // Initialisation de la carte
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=ccJFPSANlMQAFc4HEs3k',
      center: [9.4673, 0.4162], // Libreville par défaut 😊
      zoom: 2
    });

    // Contrôles de navigation
    this.map.addControl(new maplibregl.NavigationControl());

    // Ajout des marqueurs (villes du monde + Libreville)
    this.addCityMarkers();

    // Géolocalisation
    this.setupGeolocation();
  }

  private addCityMarkers(): void {
    interface City {
      name: string;
      lngLat: [number, number]; // Tuple de 2 nombres
      color: string;
      description: string;
    }
  
    const cities: City[] = [
      { name: 'Paris', lngLat: [2.3522, 48.8566], color: '#FF0000', description: 'La ville lumière' },
      { name: 'New York', lngLat: [-74.006, 40.7128], color: '#0000FF', description: 'The Big Apple' },
      { name: 'Tokyo', lngLat: [139.6917, 35.6895], color: '#FFA500', description: 'Capitale du Japon' },
      { name: 'Libreville', lngLat: [9.4673, 0.4162], color: '#00FF00', description: 'Perle de l\'Afrique !' }
    ];
  
    cities.forEach(city => {
      new maplibregl.Marker({ color: city.color })
        .setLngLat(city.lngLat) // Maintenant typé comme [number, number]
        .setPopup(new maplibregl.Popup().setHTML(`
          <b>${city.name}</b><br>${city.description}
        `))
        .addTo(this.map);
    });
  }

  private setupGeolocation(): void {
    if (!navigator.geolocation) {
      console.warn('Géolocalisation non supportée par votre navigateur');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        
        // Centrer la carte sur votre position
        this.map.flyTo({
          center: [longitude, latitude],
          zoom: 15
        });

        // Ajouter un marqueur personnalisé
        new maplibregl.Marker({ color: '#FF00FF' })
          .setLngLat([longitude, latitude])
          .setPopup(new maplibregl.Popup().setHTML(`
            <b>Vous êtes ici !</b><br>
            <small>${latitude.toFixed(4)}, ${longitude.toFixed(4)}</small>
          `))
          .addTo(this.map);
      },
      (error) => {
        console.error('Erreur de géolocalisation :', error);
        this.map.flyTo({
          center: [9.4673, 0.4162], // Retour à Libreville en cas d'erreur
          zoom: 10
        });
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }
}