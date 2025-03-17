import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { EtablissementPopupComponent } from '../etablissement-popup/etablissement-popup.component';

export interface AjoutEtablissement {
  title: string;
  id: number;
  date: Date;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  nombreEtablissement: number;
  pays: string;
  ville: string;
  nomEtablissement: string;
  service: string;
  typePropriete: string;
  adresse: string;
  photos?: { url: string; alt?: string }[];
  buttonText?: string;
  examStatus: 'pending' | 'approved' | 'declined' | 'waiting';
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MatTabsModule, CommonModule, FormsModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  etablissement: any;

  constructor(private dialog: MatDialog) {}

  newEtablissement: AjoutEtablissement[] = [
    {
      title: 'Nouvel établissement inscrit',
      id: 1,
      date: new Date('1996-03-01T23:30:00'),
      nom: 'ELOKO',
      prenom: 'Joseph William',
      telephone: '+241 074443227',
      email: 'josephsama@gmail.com',
      nombreEtablissement: 0,
      pays: 'Gabon',
      ville: 'Moanda',
      nomEtablissement: 'Parc Loango',
      service: 'Tourisme',
      typePropriete: 'Parc',
      adresse: 'Pharmacie Echangeur Nzeng',
      photos: [
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo du parc Loango - Vue panoramique',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la faune du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la plage du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo du parc Loango - Vue panoramique',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la faune du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la plage du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo du parc Loango - Vue panoramique',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la faune du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la plage du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo du parc Loango - Vue panoramique',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la faune du parc Loango',
        },
        {
          url: 'assets/img/elephant.png',
          alt: 'Photo de la plage du parc Loango',
        },
      ],
      examStatus: 'pending',
      buttonText: 'Examiner',
    },
    {
      title: 'Nouvel établissement inscrit',
      id: 2,
      date: new Date('2025-01-12T12:00:00'),
      nom: 'MOUKALA',
      prenom: 'Jean-Paul',
      telephone: '+241 067891234',
      email: 'jeanpaulmoukala@gmail.com',
      nombreEtablissement: 1,
      pays: 'Gabon',
      ville: 'Moukalaba Doudou',
      nomEtablissement: 'Hôtel Moukala Doudou',
      service: 'Hébergement',
      typePropriete: 'Hôtel',
      adresse: 'Route de la forêt, Moukalaba Doudou',
      photos: [],
      examStatus: 'pending',
      buttonText: 'Examiner',
    },
    {
      title: 'Nouvel établissement inscrit',
      id: 3,
      date: new Date('2025-01-12T12:00:00'),
      nom: 'AKANDA',
      prenom: 'Marie-Claire',
      telephone: '+241 065432198',
      email: 'marieclaireakanda@gmail.com',
      nombreEtablissement: 0,
      pays: 'Gabon',
      ville: 'Libreville',
      nomEtablissement: "Parc National d'Akanda",
      service: 'Écotourisme',
      typePropriete: 'Parc',
      adresse: 'Avenue des Manguiers, Libreville',
      photos: [],
      examStatus: 'pending',
      buttonText: 'Examiner',
    },
    {
      title: 'Nouvel établissement inscrit',
      id: 4,
      date: new Date('2025-01-12T12:00:00'),
      nom: 'MAYUMBA',
      prenom: 'Lucie',
      telephone: '+241 078945612',
      email: 'luciemayumba@gmail.com',
      nombreEtablissement: 0,
      pays: 'Gabon',
      ville: 'Mayumba',
      nomEtablissement: 'Centre de conservation de Mayumba',
      service: 'Protection de la nature',
      typePropriete: 'Centre de conservation',
      adresse: 'Plage de Mayumba, Mayumba',
      photos: [],
      examStatus: 'pending',
      buttonText: 'Examiner',
    },
    {
      title: 'Nouvel établissement inscrit',
      id: 5,
      date: new Date('2025-01-12T12:00:00'),
      nom: 'PONGARA',
      prenom: 'Alain',
      telephone: '+241 071234567',
      email: 'alainpongara@gmail.com',
      nombreEtablissement: 0,
      pays: 'Gabon',
      ville: 'Pongara',
      nomEtablissement: 'Lodge de Pongara',
      service: 'Hébergement écologique',
      typePropriete: 'Lodge',
      adresse: 'Route du Parc, Pongara',
      photos: [],
      examStatus: 'pending',
      buttonText: 'Examiner',
    },
  ];

  etablissements: AjoutEtablissement[] = [];
  selectedMessage?: AjoutEtablissement;

  selectEtablissement(etabli: AjoutEtablissement) {
    if (this.selectedMessage === etabli) {
      this.selectedMessage = undefined; // Ferme le etablissements s'il est déjà ouvert
    } else {
      this.selectedMessage = etabli; // Ouvre le etablissements sélectionné
    }
  }

  openPopup(etablissement: AjoutEtablissement) {
    const dialogRef = this.dialog.open(EtablissementPopupComponent, {
      data: etablissement, // Passez les données de l'établissement au pop-up
      width: '100%', // Largeur de 100%
      maxWidth: '900px', // Limite la largeur maximale à 800px (ajustez selon vos besoins)
      height: '643px', // Hauteur automatique
      panelClass: 'custom-dialog', // Ajoute une classe CSS personnalisée
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Vérifiez si le résultat contient un statut
        if (result.status === 'approved') {
          etablissement.buttonText = 'Approuvé';
          etablissement.examStatus = 'approved'; // Mettez à jour l'état
        } else if (result.status === 'declined') {
          etablissement.buttonText = 'Décliné';
          etablissement.examStatus = 'declined'; // Mettez à jour l'état
        }
      } else {
        // Si aucun résultat n'est retourné, cela signifie que le pop-up a été fermé sans sélection
        // Vérifiez si l'établissement n'est pas déjà approuvé ou décliné avant de mettre à jour l'état
        if (
          etablissement.examStatus !== 'approved' &&
          etablissement.examStatus !== 'declined'
        ) {
          etablissement.buttonText = "En attente d'examen";
          etablissement.examStatus = 'waiting'; // Mettez à jour l'état uniquement si ce n'est pas déjà approuvé ou décliné
        }
      }
    });
  }
}
