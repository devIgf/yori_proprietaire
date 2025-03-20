import { Component, OnInit } from '@angular/core';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements OnInit  {

  private map!: maplibregl.Map;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Créer la carte avec un centre et un zoom par défaut
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=ccJFPSANlMQAFc4HEs3k', // Style détaillé
      center: [0, 0],
      zoom: 1
    });

    // Ajouter des contrôles de navigation
    this.map.addControl(new maplibregl.NavigationControl());

    // Géolocalisation : centrer la carte sur la position actuelle
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    (position) => {
    const { longitude, latitude } = position.coords;
    this.map?.setCenter([longitude, latitude]); // Centrer la carte sur la position actuelle
    this.map?.setZoom(15); // Zoomer sur la position

    // Ajouter un marqueur à la position actuelle
    new maplibregl.Marker({ color: '#FF0000' }) // Marqueur rouge
      .setLngLat([longitude, latitude])
      .setPopup(new maplibregl.Popup().setHTML('<b>Vous êtes ici !</b>'))
      .addTo(this.map);
  },
  (error) => {
    console.error('Erreur de géolocalisation :', error);
    // Si la géolocalisation échoue, centrer la carte sur Paris par défaut
    this.map?.setCenter([2.3522, 48.8566]);
    this.map?.setZoom(13);
  },
  {
    enableHighAccuracy: true, // Active la haute précision (GPS)
    timeout: 5000, // Temps d'attente pour obtenir la localisation
    maximumAge: 0 // Ne pas utiliser de cache de localisation
  }
);
    } else {
      console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
      // Si la géolocalisation n'est pas supportée, centrer la carte sur Paris par défaut
      this.map?.setCenter([2.3522, 48.8566]);
      this.map?.setZoom(13);
    }

    // Ajouter des marqueurs à des positions spécifiques
    this.addMarkers();
  }

  private addMarkers(): void {
    // Marqueur 1 : Paris
    new maplibregl.Marker({ color: '#00FF00' }) // Marqueur vert
      .setLngLat([2.3522, 48.8566])
      .setPopup(new maplibregl.Popup().setHTML('<b>Paris</b><br>La ville lumière.'))
      .addTo(this.map);

    // Marqueur 2 : New York
    new maplibregl.Marker({ color: '#0000FF' }) // Marqueur bleu
      .setLngLat([-74.006, 40.7128])
      .setPopup(new maplibregl.Popup().setHTML('<b>New York</b><br>The Big Apple.'))
      .addTo(this.map);

    // Marqueur 3 : Tokyo
    new maplibregl.Marker({ color: '#FFA500' }) // Marqueur orange
      .setLngLat([139.6917, 35.6895])
      .setPopup(new maplibregl.Popup().setHTML('<b>Tokyo</b><br>La capitale du Japon.'))
      .addTo(this.map);
  }
}
