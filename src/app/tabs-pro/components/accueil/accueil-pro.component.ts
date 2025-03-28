import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { InelComponent } from '../inel/inel.component';
import { AmourComponent } from '../amour/amour.component';
import { ClaudelComponent } from '../claudel/claudel.component';
import { FransdaComponent } from '../fransda/fransda.component';
import { Client } from '../../../interfaces/Client';
import { Comment } from '../../../interfaces/Comment';
import { GoogleMapComponent } from "../google-map/google-map.component";
import { SharedTabService } from '../../../services/shared-tab.service';



@Component({
  selector: 'app-accueil-pro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatTabsModule,
    GoogleMapComponent
], 
  templateUrl: './accueil-pro.component.html',
  styleUrl: './accueil-pro.component.css',
})
export class AccueilProComponent implements OnInit {
  
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
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
      statut_structure: ''
    },
  ];

  images: string[] = [
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
  ];

  comments: Comment[] = [
    {
      id: 1,
      userId: 'Utilisateur1',
      content: 'déception totale !',
      createdDate: new Date('2024-11-20'),
      rating: 1,
      replies: [],
    },
    {
      id: 2,
      userId: 'Utilisateur2',
      content: 'Le service client est très réactif.',
      createdDate: new Date('2024-11-21'),
      rating: 4,
      replies: [],
    },
    {
      id: 3,
      userId: 'Utilisateur3',
      content: 'Je recommande vivement ce site.',
      createdDate: new Date('2024-11-22'),
      rating: 5,
      replies: [],
    },
    {
      id: 4,
      userId: 'Utilisateur4',
      content: 'Un peu déçu par le service client.',
      createdDate: new Date('2024-11-23'),
      rating: 3,
      replies: [],
    },
    {
      id: 5,
      userId: 'Utilisateur5',
      content: "très belles chambres, j'adore!.",
      createdDate: new Date('2024-11-24'),
      rating: 4,
      replies: [],
    },
  ];

  statutsOptions = [
    { id: 'tous', label: 'Nouveau(x)' },
    { id: 'reservation', label: 'Ancien(s)' },
    { id: 'arrivees', label: 'Suspendu(s) temporairement' },
    { id: 'departures', label: 'Supprimé(s) définitivement' },
    { id: 'sejour-en-cours', label: 'Fermé(s)' }
  ];

  toggleStatut(statutId: string): void {
    if (this.selectedStatuts.includes(statutId)) {
      this.selectedStatuts = this.selectedStatuts.filter(id => id !== statutId);
    } else {
      this.selectedStatuts.push(statutId);
    }
  }
  
  

  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedStatut: string = "Vue d'ensemble"; // Valeur par défaut

  items = [
    {
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
      component: FransdaComponent,
    },
    {
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
      component: ClaudelComponent,
    },
  ];

  items2 = [
    {
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
      component: AmourComponent,
    },
    {
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
      component: InelComponent,
    },
  ];

  activeComponent: any; // Composant actif pour items
  selectedTab: number = 0; // Onglet sélectionné pour items

  activeComponentItems2: any; // Composant actif pour items2
  selectedTabItems2: number = 0; // Onglet sélectionné pour items2

  ngOnInit() {
    const storedTabIndex = localStorage.getItem('activeTab');
    if (storedTabIndex) {
      this.selectedTab = +storedTabIndex; // Convertir en nombre
    }

    const storedTabIndexItems2 = localStorage.getItem('activeTabItems2');
    if (storedTabIndexItems2) {
      this.selectedTabItems2 = +storedTabIndexItems2; // Convertir en nombre
    }

    this.setActiveComponent(this.selectedTab); // Initialiser le composant actif pour items
    this.setActiveComponentItems2(this.selectedTabItems2); // Initialiser le composant actif pour items2

    this.dateAujourdhui = new Date().toLocaleDateString();

    this.sharedTabService.selectedClient$.subscribe(client => {
      this.selectedClient = client;
      this.showDetails = !!client; 
    });
  }

  // Méthodes pour gérer les items
  setActiveComponent(tabIndex: number) {
    if (tabIndex < this.items.length) {
      this.activeComponent = this.items[tabIndex].component; // Mettre à jour le composant actif pour items
    }
  }

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné pour items
    localStorage.setItem('activeTab', tabIndex.toString()); // Stocke l'index dans localStorage
    this.setActiveComponent(tabIndex); // Mettre à jour le composant actif
  }

  // Méthodes pour gérer les items2 (duplicata des méthodes de items)
  setActiveComponentItems2(tabIndex: number) {
    if (tabIndex < this.items2.length) {
      this.activeComponentItems2 = this.items2[tabIndex].component; // Mettre à jour le composant actif pour items2
    }
  }

  selectTabItems2(tabIndex: number) {
    this.selectedTabItems2 = tabIndex; // Met à jour l'onglet sélectionné pour items2
    localStorage.setItem('activeTabItems2', tabIndex.toString()); // Stocke l'index dans localStorage
    this.setActiveComponentItems2(tabIndex); // Mettre à jour le composant actif
  }

  sousStatuts: { [key: string]: string[] } = {
    Hotellerrie: ['Tous les types','Hotel', 'Motel', 'Appartement'],
    Tourisme: [
      'Tous les types',
      'Randonnés',
      'Parcs',
      'Campings',
      'Plages privées',
      'Maisons traditionnelles',
    ],
  };

  // Liste des évaluations pour le filtre
  evaluationsFiltres: string[] = [
    'Tout grouper',
    'Très bon',
    'Bon',
    'Moyen',
    'Mauvais',
  ];
  selectedEvaluation: string = 'Tout grouper'; // Valeur par défaut

  // Liste des durées pour le filtre
  dureesFiltres: string[] = ['Tous les années'];
  selectedDuree: string = 'Tous les années'; // Valeur par défaut

  dialogueMessage: boolean = false;
  dialogueMessageEnvoye: boolean = false;
  estBloque: boolean = false;
  estSupprimer: boolean = false;
  messagebloque: string = '';
  selectedValue: string = '';
  validerSuppr: boolean = false;
  dateAujourdhui: string = '';

  constructor(private sharedTabService: SharedTabService) {
    // Initialiser le sous-statut en fonction du statut par défaut
    this.onStatutChange();
    this.initializeCountryFilters();
    this.initializeDurationFilters();
  }

  onStatutChange(): void {
    if (this.selectedStatut === "Vue d'ensemble") {
      this.selectedSousStatut = "";
    } else {
      this.selectedSousStatut = "Tous les types"; // Valeur par défaut
    }
  }
  
  initializeCountryFilters() {
    const uniqueCountries = new Set(this.clients.map((client) => client.pays));
    this.paysFiltres.push(...Array.from(uniqueCountries));
  }

  initializeDurationFilters() {
    const uniqueDurations = new Set(this.clients.map((client) => client.duree));
    this.dureesFiltres.push(...Array.from(uniqueDurations)); // Ajoute "Tous" et les durées uniques
  }

  get filteredClients() {
    return this.clients.filter((client) => {
      const matchesPays =
        this.selectedPays === 'Tous les pays' || client.pays === this.selectedPays;
      const matchesEvaluation =
        this.selectedEvaluation === 'Tout grouper' || client.evaluation === this.selectedEvaluation;
      const matchesDuree =
        this.selectedDuree === 'Tous les années' || client.duree === this.selectedDuree;
      
       // Filtre par statut
      const matchesStatut = 
        this.selectedStatut === "Vue d'ensemble" || 
        client.statut === this.selectedStatut;
  
      // Filtre par sous-statut (UNIQUEMENT si un statut spécifique est sélectionné)
      const matchesSousStatut = 
        this.selectedStatut === "Vue d'ensemble" || // Ignore si "Vue d'ensemble"
        this.selectedSousStatut === "Tous les types" || 
        client.type_propriete === this.selectedSousStatut;
  
      return matchesPays && matchesEvaluation && matchesDuree && matchesStatut && matchesSousStatut;
    });
  }

  selectedSousStatut: string ="";  // Initialiser comme une chaîne vide
  filterPays: string = ''; // Propriété pour le filtre
  dateDebut: string = '';
  dateFin: string = '';
  paysFiltres: string[] = ['Tous les pays'];
  selectedPays: string = 'Tous les pays'; // Valeur par défaut
  showCheckboxes: boolean = false;
  selectedStatuts: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [5, 10, 50];
  selectedClient: any = null;
  showDetails: boolean = false;
  numeroTelephone: boolean = false;
  checkboxValues: { [key: string]: boolean } = {};
  openFiltre: boolean = false;

  afficherFiltre() {
    this.openFiltre = !this.openFiltre;
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

  toggleCheckboxes() {
    this.showCheckboxes = !this.showCheckboxes;
  }

  toggleStatutSelection(statut: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedStatuts.push(statut);
    } else {
      this.selectedStatuts = this.selectedStatuts.filter((s) => s !== statut);
    }
    console.log(this.selectedStatuts); // Pour déboguer et voir les statuts sélectionnés
  }

  get paginatedClients() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredClients.slice(start, start + this.itemsPerPage); // Appliquer le filtrage ici
  }

  get totalPages() {
    return Math.ceil(this.getClientsFiltres().length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onItemsPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.itemsPerPage = Number(selectElement.value);
    this.currentPage = 1; // Réinitialiser à la première page
  }

  // Méthode appelée lors du clic sur le lien
  @ViewChild(Component)
  mapComponent!: GoogleMapComponent;
  afficherDetails(client: Client) {
    this.selectedClient = client;
    this.showDetails = true; 
  }

  afficherTelephone() {
    this.numeroTelephone = !this.numeroTelephone;
  }

  // Méthode pour revenir à la vue par défaut
  revenir() {
    this.selectedClient = null;
    this.showDetails = false; // On cache la div conditionnée
  }

  toogleMessage() {
    this.dialogueMessage = !this.dialogueMessage;
  }

  messageenvoye() {
    this.dialogueMessage = !this.dialogueMessage;
    this.dialogueMessageEnvoye = !this.dialogueMessageEnvoye;
  }
  fermerMessageenvoye() {
    this.dialogueMessageEnvoye = !this.dialogueMessageEnvoye;
  }
  estBloqueEtablissement() {
    this.estBloque = !this.estBloque;
  }

  estSupprimeEtablissement() {
    this.estSupprimer = !this.estSupprimer;
  }

  onRadioChange(event: any) {
    // this.estBloque = !this.estBloque;
    this.selectedValue = event.target.value;
  }

  onEnregisterClick() {
    if (this.selectedValue) {
      const dateDebut = new Date().toLocaleDateString();
      const dateFin = this.calculerDateFin(this.selectedValue);
      this.messagebloque = `Etablissement bloqué temporairement  le ${dateDebut} au ${dateFin}. Durée : ${this.selectedValue}`;
      this.estBloque = !this.estBloque;
    } else {
      this.messagebloque = 'Veuillez sélectionner une durée de blocage.';
    }
  }

  calculerDateFin(valeur: string): string {
    const date = new Date();
    switch (valeur) {
      case '1 semaine':
        date.setDate(date.getDate() + 7);
        break;
      case '2 semaines':
        date.setDate(date.getDate() + 14);
        break;
      case '1 mois':
        date.setMonth(date.getMonth() + 1);
        break;
      case '2 mois':
        date.setMonth(date.getMonth() + 2);
        break;
      case '3 mois':
        date.setMonth(date.getMonth() + 3);
        break;
    }
    return date.toLocaleDateString();
  }

  afficherNotifSuppr() {
    this.validerSuppr = !this.validerSuppr;
    this.estSupprimer = !this.estSupprimer;
  }





  

}
