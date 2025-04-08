import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup, MatTab, MatTabsModule } from '@angular/material/tabs';
import { SharedTabService } from '../../../services/shared-tab.service';
import { Client } from '../../../interfaces/Client';


@Component({
  selector: 'app-compte-proprietaire',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatTabsModule,
  ],
  templateUrl: './compte-proprietaire.component.html',
  styleUrl: './compte-proprietaire.component.css',
})
export class CompteProprietaireComponent implements OnInit {
  clients: Client[] = [
    {
      nom: 'Jean Dupont',
      statut: 'Hotellerrie',
      duree: '2',
      pays: 'Gabon',
      nombre_structure: 1,
      evaluation: 'Très bon',
      id: 1,
      contact: '00010',
      email: 'yor@infogmail.com',
      statut_structure: 'Fermé',
      type_propriete: ''
    },
    {
      nom: 'Marie Curie',
      statut: 'Tourisme',
      duree: '5',
      pays: 'Gabon',
      nombre_structure: 2,
      evaluation: 'Très bon',
      id: 2,
      contact: '00009',
      email: 'yor@infogmail.com',
      statut_structure: 'Supprimé',
      type_propriete: ''
    },
    {
      nom: 'Pierre Martin',
      statut: 'Hotellerrie',
      duree: '5',
      pays: 'Sénégal',
      nombre_structure: 3,
      evaluation: 'bon',
      id: 3,
      contact: '00008',
      email: 'yor@infogmail.com',
      statut_structure: 'Bloqué temporairement',
      type_propriete: ''
    },
    {
      nom: 'Sophie Germain',
      statut: 'Hotellerrie',
      duree: '5',
      pays: 'Bénin',
      nombre_structure: 4,
      evaluation: 'Moins bon',
      id: 4,
      contact: '00007',
      email: 'yor@infogmail.com',
      statut_structure: 'Bloqué \n temporairement',
      type_propriete: ''
    },
    {
      nom: 'Lucie Aubrac',
      statut: 'Tourisme',
      duree: '5',
      pays: 'Congo',
      nombre_structure: 5,
      evaluation: 'Mauvais',
      id: 5,
      contact: '000006',
      email: 'yor@infogmail.com',
      statut_structure: 'Actif',
      type_propriete: ''
    },
    {
      nom: 'Antoine Doinel',
      statut: '2024-11-02',
      duree: '5',
      pays: '',
      nombre_structure: 1,
      evaluation: '',
      id: 6,
      contact: '00005',
      email: 'yor@infogmail.com',
      statut_structure: 'Actif',
      type_propriete: ''
    },
    {
      nom: 'Clara Zetkin',
      statut: '2024-11-11',
      duree: '3',
      pays: '',
      nombre_structure: 2,
      evaluation: '',
      id: 7,
      contact: '00004',
      email: 'yor@infogmail.com',
      statut_structure: 'Actif',
      type_propriete: ''
    },
    {
      nom: 'Gabriel Garcia',
      statut: '2024-10-30',
      duree: '3',
      pays: '',
      nombre_structure: 2,
      evaluation: '',
      id: 8,
      contact: '00003',
      email: 'yor@infogmail.com',
      statut_structure: 'Fermé',
      type_propriete: ''
    },
    {
      nom: 'Nina Simone',
      statut: '2024-11-03',
      duree: '3',
      pays: '',
      nombre_structure: 1,
      evaluation: '',
      id: 9,
      contact: '00002',
      email: 'yor@infogmail.com',
      statut_structure: 'Supprimé',
      type_propriete: ''
    },
    {
      nom: 'Albert Camus',
      statut: '2024-11-12',
      duree: '7',
      pays: '',
      nombre_structure: 3,
      evaluation: '',
      id: 10,
      contact: '00001',
      email: 'yor@infogmail.com',
      statut_structure: 'Fermé',
      type_propriete: ''
    },
  ];

  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedStatut: string = "Vue d'ensemble"; // Valeur par défaut

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

    this.dateAujourdhui = new Date().toLocaleDateString();
  }



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

  ouvrirDetailsClient(client: Client) {
    // Étape 1 : Envoyer le client sélectionné au service
    this.sharedTabService.selectClient(client);
    
    // Étape 2 : Demander l'ouverture de l'onglet Accueil
    this.sharedTabService.openAccueilTab();
  }
  

  onStatutChange() {
    
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
        this.selectedPays === 'Tous les pays' ||
        client.pays === this.selectedPays;
      const matchesEvaluation =
        this.selectedEvaluation === 'Tout grouper' ||
        client.evaluation === this.selectedEvaluation;
      const matchesDuree =
        this.selectedDuree === 'Tous les années' ||
        client.duree === this.selectedDuree;
      const matchesStatut =
        this.selectedStatut === 'Vue d\'ensemble' || // Inclut le cas "Vue d'ensemble"
        client.statut === this.selectedStatut;
  
      return matchesPays && matchesEvaluation && matchesDuree && matchesStatut;
    });
  }
  

  selectedSousStatut: string = ''; // Initialiser comme une chaîne vide
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
    const end = start + this.itemsPerPage;
    return this.filteredClients.slice(start, end);
  }


  get totalPages() {
    return Math.ceil(this.filteredClients.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = parseInt(event.target.value, 10);
    this.currentPage = 1; // Revenir à la première page après changement
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }


  // Méthode appelée lors du clic sur le lien
  afficherDetails(client: Client) {
    this.selectedClient = client;
    this.showDetails = true; // On affiche la div conditionnée
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
      this.messagebloque = `Compte propriétaire bloqué temporairement  le ${dateDebut} au ${dateFin}. Durée : ${this.selectedValue}`;
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
