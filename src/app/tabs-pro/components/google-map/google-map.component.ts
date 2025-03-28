import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: maplibregl.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    if (!this.mapContainer?.nativeElement) {
      console.error('Conteneur de carte introuvable !');
      return;
    }

    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement, // Utilisez la référence ViewChild
      style: 'https://api.maptiler.com/maps/streets/style.json?key=ccJFPSANlMQAFc4HEs3k',
      center: [2.3522, 48.8566], // Paris par défaut
      zoom: 13
    });

    // Contrôles de navigation (optionnel)
    this.map.addControl(new maplibregl.NavigationControl());

    // Marqueur de test
    new maplibregl.Marker({ color: '#FF0000' })
      .setLngLat([2.3522, 48.8566])
      .addTo(this.map);

    console.log('Carte initialisée avec succès !');
  }
}
