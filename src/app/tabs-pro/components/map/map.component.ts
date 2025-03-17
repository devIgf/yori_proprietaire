import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl:'./map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialisation de la carte avec un centre temporaire
    const map = L.map('map').setView([0, 0], 13);
  
    // Ajout des tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
  
    // Vérifier si la géolocalisation est disponible
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
  
          // Mettre à jour la vue de la carte avec la position de l'utilisateur
          map.setView([latitude, longitude], 13);
  
          // Ajouter un marqueur à la position actuelle
          L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup('Vous êtes ici !')
            .openPopup();
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error);
          alert('Impossible de récupérer votre position actuelle.');
        }
      );
    } else {
      alert('La géolocalisation n\'est pas supportée par votre navigateur.');
    }
  }
  
}
