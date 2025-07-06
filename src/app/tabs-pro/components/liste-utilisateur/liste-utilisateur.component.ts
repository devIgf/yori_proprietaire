import { Utilisateurs } from './../../../interfaces/Utilisateurs';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Client } from '../../../interfaces/Client';
import { SharedTabService } from '../../../services/shared-tab.service';

@Component({
  selector: 'app-liste-utilisateur',
  imports: [FormsModule, CommonModule, MatIcon],
  templateUrl: './liste-utilisateur.component.html',
  styleUrl: './liste-utilisateur.component.css',
})
export class ListeUtilisateurComponent {
  clients: Utilisateurs[] = [
    {
      id: 1,
      nom: 'Jean-Hilaire Aubame',
      genre: 'Homme',
      dateNaissance: '1912-11-10',
      telephone: '+241 77 12 34 56',
      role: 'Super administrateurs',
      email: 'jean.aubame@historique.ga',
    },
    {
      id: 2,
      nom: 'Rose Francine Rogombe',
      genre: 'Femme',
      dateNaissance: '1942-09-20',
      telephone: '+241 66 23 45 67',
      role: 'Gestion de propriétés',
      email: 'rose.rogombe@justice.ga',
    },
    {
      id: 3,
      nom: 'Pierre Savorgnan de Brazza',
      genre: 'Homme',
      dateNaissance: '1852-01-26',
      telephone: '+241 74 56 78 90',
      role: 'Gestion de statistiques',
      email: 'pierre.brazza@exploration.ga',
    },
    {
      id: 4,
      nom: 'Annie-Flore Batchiellilys',
      genre: 'Femme',
      dateNaissance: '1967-04-10',
      telephone: '+241 65 34 56 78',
      role: 'Gestion de paiements',
      email: 'annie.batchiellilys@culture.ga',
    },
    {
      id: 5,
      nom: 'Philippe Mory',
      genre: 'Homme',
      dateNaissance: '1935-03-15',
      telephone: '+241 77 45 67 89',
      role: 'Modérateur de contenu',
      email: 'philippe.mory@cinema.ga',
    },
    {
      id: 6,
      nom: 'Sandrine Bessora',
      genre: 'Femme',
      dateNaissance: '1968-09-23',
      telephone: '+241 66 78 90 12',
      role: 'Super administrateurs',
      email: 'sandrine.bessora@litterature.ga',
    },
    {
      id: 7,
      nom: 'Paul Gondjout',
      genre: 'Homme',
      dateNaissance: '1912-06-14',
      telephone: '+241 74 23 45 67',
      role: 'Gestion de propriétés',
      email: 'paul.gondjout@parlement.ga',
    },
    {
      id: 8,
      nom: 'Eloi Chambrier',
      genre: 'Homme',
      dateNaissance: '1920-07-01',
      telephone: '+241 77 89 01 23',
      role: 'Gestion de statistiques',
      email: 'eloi.chambrier@sante.ga',
    },
    {
      id: 9,
      nom: 'Victor de Compiègne',
      genre: 'Homme',
      dateNaissance: '1846-02-10',
      telephone: '+241 65 12 34 56',
      role: 'Gestion de paiements',
      email: 'victor.compiegne@exploration.ga',
    },
    {
      id: 10,
      nom: 'André Gustave Anguilé',
      genre: 'Homme',
      dateNaissance: '1920-04-22',
      telephone: '+241 74 67 89 01',
      role: 'Modérateur de contenu',
      email: 'andre.anguile@gouvernement.ga',
    },
  ];

  constructor(private sharedTabService: SharedTabService) {}
  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedStatut: string = "Vue d'ensemble";
  selectedSousStatut: string = '';
  dureesFiltres: string[] = ['Tous les années'];
  openFiltre: boolean = false;
  selectedStatuts: string[] = [];
  dateDebut: string = '';
  dateFin: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedClient: any = null;
  showDetails: boolean = false;
  itemsPerPageOptions: number[] = [5, 10, 50];
  filteredClients: Utilisateurs[] = this.clients; // Liste des clients filtrés

  statutsOptions = [
    {
      id: 'super_administrateurs',
      label: 'Super administrateurs',
      color: '#F90808',
    },
    {
      id: 'gestion_de_proprietes',
      label: 'Gestion de propriétés',
      color: '#0D0DC5',
    },
    {
      id: 'gestion_de_statistiques',
      label: 'Gestion de statistiques',
      color: '#1D9605',
    },
    {
      id: 'gestion_de_paiements',
      label: 'Gestion de paiements',
      color: '#00B2F3',
    },
    {
      id: 'moderateur_de_contenu',
      label: 'Modérateur de contenu',
      color: '#F37900',
    },
  ];

  // Récupérer la couleur pour un rôle donné
  getColorForRole(role: string): string {
    const normalizedRole = this.normalizeString(role);
    const statut = this.statutsOptions.find((s) => s.id === normalizedRole);
    return statut ? statut.color : '#FFFFFF'; // Couleur par défaut (blanc) si aucun statut ne correspond
  }

  afficherFiltre() {
    this.openFiltre = !this.openFiltre;
  }

  // Normaliser les chaînes pour gérer les accents
  normalizeString(str: string): string {
    return str
      .normalize('NFD') // Décomposer les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .toLowerCase()
      .replace(/\s+/g, '_'); // Remplacer les espaces par des underscores
  }

  toggleStatut(statutId: string) {
    if (this.selectedStatuts.includes(statutId)) {
      this.selectedStatuts = this.selectedStatuts.filter(
        (id) => id !== statutId
      );
    } else {
      this.selectedStatuts.push(statutId);
    }
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedStatuts.length === 0) {
      this.filteredClients = this.clients;
    } else {
      this.filteredClients = this.clients.filter((client) =>
        this.selectedStatuts.includes(this.normalizeString(client.role))
      );
    }
  }

  printPage() {
    window.print();
  }

  get paginatedClients() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredClients.slice(start, end);
  }

  // get filteredClients() {
  //   return this.clients.filter((utilisateurs) => {

  //     // Filtre par statut
  //     const matchesStatut =
  //       this.selectedStatut === "Vue d'ensemble" ||
  //       utilisateurs.role === this.selectedStatut;

  //     // Filtre par sous-statut (UNIQUEMENT si un statut spécifique est sélectionné)
  //     const matchesSousStatut =
  //       this.selectedStatut === "Vue d'ensemble" || // Ignore si "Vue d'ensemble"
  //       this.selectedSousStatut === 'Tous les types' ||
  //       utilisateurs.role === this.selectedSousStatut;

  //     return (
  //       matchesStatut &&
  //       matchesSousStatut
  //     );
  //   });
  // }

  afficherDetails(client: Client) {
    this.selectedClient = client;
    this.showDetails = true;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredClients.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = parseInt(event.target.value, 10);
    this.currentPage = 1; // Revenir à la première page après changement
  }
}
