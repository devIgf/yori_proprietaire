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
  clients: Client[] = [
    {
      nom: 'Jean Dupont',
      statut: 'Hotellerrie',
      duree: '45 jours',
      pays: 'Gabon',
      type_propriete: 'Hotel',
      evaluation: 'Très bon',
      id: 1,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Marie Curie',
      statut: 'Tourisme',
      duree: '5 jours',
      pays: 'Gabon',
      type_propriete: '',
      evaluation: 'Très bon',
      id: 2,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Pierre Martin',
      statut: 'Hotellerrie',
      duree: '5 jours',
      pays: 'Sénégal',
      type_propriete: '',
      evaluation: 'bon',
      id: 3,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Sophie Germain',
      statut: 'Hotellerrie',
      duree: '5 jours',
      pays: 'Bénin',
      type_propriete: '',
      evaluation: 'Moins bon',
      id: 4,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Lucie Aubrac',
      statut: 'Tourisme',
      duree: '5 jours',
      pays: 'Congo',
      type_propriete: '',
      evaluation: 'Mauvais',
      id: 5,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Antoine Doinel',
      statut: '2024-11-02',
      duree: '5 jours',
      pays: '',
      type_propriete: '',
      evaluation: '',
      id: 6,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Clara Zetkin',
      statut: '2024-11-11',
      duree: '3 jours',
      pays: '',
      type_propriete: '',
      evaluation: '',
      id: 7,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Gabriel Garcia',
      statut: '2024-10-30',
      duree: '3 jours',
      pays: '',
      type_propriete: '',
      evaluation: '',
      id: 8,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Nina Simone',
      statut: '2024-11-03',
      duree: '3 jours',
      pays: '',
      type_propriete: '',
      evaluation: '',
      id: 9,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
    {
      nom: 'Albert Camus',
      statut: '2024-11-12',
      duree: '7 jours',
      pays: '',
      type_propriete: '',
      evaluation: '',
      id: 10,
      contact: '',
      email: '',
      nombre_structure: 0,
      statut_structure: '',
    },
  ];

  constructor(private sharedTabService: SharedTabService) {
    // Initialiser le sous-statut en fonction du statut par défaut
    this.onStatutChange();
    this.initializeCountryFilters();
    this.initializeDurationFilters();
  }
  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedStatut: string = "Vue d'ensemble";
  selectedSousStatut: string = '';
  paysFiltres: string[] = ['Tous les pays'];
  selectedPays: string = 'Tous les pays'; //
  selectedEvaluation: string = 'Tout grouper';
  dureesFiltres: string[] = ['Tous les années'];
  selectedDuree: string = 'Tous les années'; //
  openFiltre: boolean = false;
  selectedStatuts: string[] = [];
  dateDebut: string = '';
  dateFin: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedClient: any = null;
  showDetails: boolean = false;
  itemsPerPageOptions: number[] = [5, 10, 50];

  sousStatuts: { [key: string]: string[] } = {
    Hotellerrie: ['Tous les types', 'Hotel', 'Motel', 'Appartement'],
    Tourisme: [
      'Tous les types',
      'Randonnés',
      'Parcs',
      'Campings',
      'Plages privées',
      'Maisons traditionnelles',
    ],
  };
  statutsOptions = [
    { id: 'tous', label: 'Nouveau(x)' },
    { id: 'reservation', label: 'Ancien(s)' },
    { id: 'arrivees', label: 'Suspendu(s) temporairement' },
    { id: 'departures', label: 'Supprimé(s) définitivement' },
    { id: 'sejour-en-cours', label: 'Fermé(s)' },
  ];
  evaluationsFiltres: string[] = [
    'Tout grouper',
    'Très bon',
    'Bon',
    'Moyen',
    'Mauvais',
  ];

  initializeCountryFilters() {
    const uniqueCountries = new Set(this.clients.map((client) => client.pays));
    this.paysFiltres.push(...Array.from(uniqueCountries));
  }

  initializeDurationFilters() {
    const uniqueDurations = new Set(this.clients.map((client) => client.duree));
    this.dureesFiltres.push(...Array.from(uniqueDurations)); // Ajoute "Tous" et les durées uniques
  }

  onStatutChange(): void {
    if (this.selectedStatut === "Vue d'ensemble") {
      this.selectedSousStatut = '';
    } else {
      this.selectedSousStatut = 'Tous les types'; // Valeur par défaut
    }
  }

  afficherFiltre() {
    this.openFiltre = !this.openFiltre;
  }

  toggleStatut(statutId: string): void {
    if (this.selectedStatuts.includes(statutId)) {
      this.selectedStatuts = this.selectedStatuts.filter(
        (id) => id !== statutId
      );
    } else {
      this.selectedStatuts.push(statutId);
    }
  }

  getClientsFiltres() {
    return this.clients.filter((client) => {
      const dateArrivee = new Date(client.statut);
      const dateDebutObj = new Date(this.dateDebut);
      const dateFinObj = new Date(this.dateFin);

      const isStatutValide =
        this.selectedStatut === "Vue d'ensemble" ||
        client.statut === this.selectedStatut;
      const isDateValide =
        (!this.dateDebut || dateArrivee >= dateDebutObj) &&
        (!this.dateFin || dateArrivee <= dateFinObj);

      return isStatutValide && isDateValide;
    });
  }

  printPage() {
    window.print();
  }

  get paginatedClients() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredClients.slice(start, end);
  }

  get filteredClients() {
    return this.clients.filter((client) => {
      const matchesPays =
        this.selectedPays === 'Tous les pays' ||
        client.pays === this.selectedPays;
      const matchesEvaluation =
        this.selectedEvaluation === 'Tout grouper' ||
        client.evaluation === this.selectedEvaluation;
      const matchesDuree =
        this.selectedDuree === 'Tous les années' ||
        client.duree === this.selectedDuree;

      // Filtre par statut
      const matchesStatut =
        this.selectedStatut === "Vue d'ensemble" ||
        client.statut === this.selectedStatut;

      // Filtre par sous-statut (UNIQUEMENT si un statut spécifique est sélectionné)
      const matchesSousStatut =
        this.selectedStatut === "Vue d'ensemble" || // Ignore si "Vue d'ensemble"
        this.selectedSousStatut === 'Tous les types' ||
        client.type_propriete === this.selectedSousStatut;

      return (
        matchesPays &&
        matchesEvaluation &&
        matchesDuree &&
        matchesStatut &&
        matchesSousStatut
      );
    });
  }

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
