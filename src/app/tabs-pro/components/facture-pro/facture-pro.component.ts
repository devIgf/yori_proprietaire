import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Facture } from '../../../interfaces/Facture';


@Component({
  selector: 'app-facture-pro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule],
  templateUrl: './facture-pro.component.html',
  styleUrl: './facture-pro.component.css',
})
export class FactureProComponent implements OnInit {
  showDetails: boolean = false;
  selectedType: string = "Vue d'ensemble"; // Valeur par défaut
  TypesFiltres: string[] = ['Hotellerrie', 'Tourisme'];
  selectedPaidType: string = "Vue d'ensemble";
  selectedUnpaidType: string = "Vue d'ensemble";
  selectedUnavailableType: string = "Vue d'ensemble";
  selectedPays: string = 'Tous les pays'; // Valeur par défaut
  paysFiltres: string[] = ['Tous les pays'];
  paidFactures: Facture[] = [];
  unpaidFactures: Facture[] = [];
  unavailableFactures: Facture[] = [];


  factures: Facture[] = [
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-01-31',
      commission: 250000,
      commissionPayee: 250000,
      resteAPayer: 0,
      id: 1,
      pays: 'Senegal',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En attente',
      dateLimite: '2025-02-15',
      commission: 100000,
      commissionPayee: 70000,
      resteAPayer: 30000,
      id: 2,
      pays: 'RDC',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-01',
      commission: 150000,
      commissionPayee: 100000,
      resteAPayer: 50000,
      id: 3,
      pays: 'Ivory Coast',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-01-20',
      commission: 120000,
      commissionPayee: 120000,
      resteAPayer: 0,
      id: 4,
      pays: 'Gabon',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En retard',
      dateLimite: '2025-01-10',
      commission: 75000,
      commissionPayee: 50000,
      resteAPayer: 25000,
      id: 5,
      pays: 'Nigeria',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-01-05',
      commission: 200000,
      commissionPayee: 200000,
      resteAPayer: 0,
      id: 6,
      pays: 'Ghana',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-10',
      commission: 350000,
      commissionPayee: 200000,
      resteAPayer: 150000,
      id: 7,
      pays: 'Togo',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En attente',
      dateLimite: '2025-02-28',
      commission: 180000,
      commissionPayee: 80000,
      resteAPayer: 100000,
      id: 8,
      pays: 'Mali',
      type: 'Hotellerrie'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En retard',
      dateLimite: '2025-01-25',
      commission: 250000,
      commissionPayee: 150000,
      resteAPayer: 100000,
      id: 9,
      pays: 'Rwanda',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-02-05',
      commission: 400000,
      commissionPayee: 400000,
      resteAPayer: 0,
      id: 10,
      pays: 'Ivory Coast',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-15',
      commission: 500000,
      commissionPayee: 300000,
      resteAPayer: 200000,
      id: 11,
      pays: 'Burkina Faso',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-01-31',
      commission: 150000,
      commissionPayee: 150000,
      resteAPayer: 0,
      id: 12,
      pays: 'South Africa',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En attente',
      dateLimite: '2025-03-01',
      commission: 220000,
      commissionPayee: 120000,
      resteAPayer: 100000,
      id: 13,
      pays: 'Algeria',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'En retard',
      dateLimite: '2025-02-10',
      commission: 300000,
      commissionPayee: 150000,
      resteAPayer: 150000,
      id: 14,
      pays: 'Guinea-Bissau',
      type: 'Tourisme'
    },
    {
      nom: 'Hotel Luis vitton de Sotéga',
      statut: 'Payée',
      dateLimite: '2025-01-31',
      commission: 500000,
      commissionPayee: 500,
      resteAPayer: 0,
      id: 15,
      pays: 'Mauritania',
      type: 'Tourisme'
    },
  ];

  selectedFacture: Facture | null = null; // Facture sélectionnée // ... autres propriétés et méthodes
  selectedFactureName: string = ''; // Nom de la facture sélectionnée // ... autres propriétés et méthodes
  currentPage: number = 1;
  itemsPerPage: number = 5; // Nombre d'éléments par page
  itemsPerPageOptions: number[] = [5, 10, 20]; // Options disponibles
  totalPages: number = 1;
  selectedTab: number = 0;

  constructor() {
    // Initialiser le sous-statut en fonction du statut par défaut
    this.onStatutChange();
    this.initializeCountryFilters();
    this.paidFactures = this.factures.filter(
      (facture) => facture.statut === 'Payée'
    );
    this.unpaidFactures = this.factures.filter((facture) =>
      ['En attente', 'Partiellement payée'].includes(facture.statut)
    );
    this.unavailableFactures = this.factures.filter(
      (facture) => facture.statut === 'En retard'
    );
    this.filterFacturesByCountry(); // Appliquer les filtres au démarrage
  }

  ngOnInit(): void {
    this.calculateTotalPages(); // Calculer les pages dès le chargement
  }

  onStatutChange() {
    
  }
  

  initializeCountryFilters() {
    const uniqueCountries = new Set(
      this.factures.map((facture) => facture.pays)
    );
    this.paysFiltres.push(...Array.from(uniqueCountries));
  }

  afficherDetails(facture: Facture) {
    this.showDetails = !this.showDetails;
    this.selectedFacture = facture;
    this.selectedFactureName = facture.nom;
  }

  // Filtrer les factures en fonction du pays sélectionné
  filterFacturesByCountry() {
    const country = this.selectedPays;

    this.paidFactures = this.factures.filter(
      (facture) =>
        facture.statut === 'Payée' &&
        (country === 'Tous les pays' || facture.pays === country)
    );

    this.unpaidFactures = this.factures.filter(
      (facture) =>
        ['En attente', 'Partiellement payée'].includes(facture.statut) &&
        (country === 'Tous les pays' || facture.pays === country)
    );

    this.unavailableFactures = this.factures.filter(
      (facture) =>
        facture.statut === 'En retard' &&
        (country === 'Tous les pays' || facture.pays === country)
    );
  }

  filterFactures() {
    this.filterFacturesByType();
    this.filterFacturesByCountry();
    this.updateTotalPages();
  }

  filterFacturesByType() {
    const type = this.selectedType;

    // Filtrer les factures en fonction du type
    let filteredFactures = this.factures.filter(facture =>
      type === 'Vue d\'ensemble' || facture.type === type
    );

    // Réinitialiser la sélection du pays si un type spécifique est sélectionné
    if (type !== 'Vue d\'ensemble') {
      this.selectedPays = 'Tous les pays';
    }

    // Mettre à jour les factures en fonction du statut
    this.paidFactures = filteredFactures.filter(facture => facture.statut === 'Payée');
    this.unpaidFactures = filteredFactures.filter(facture => ['En attente', 'Partiellement payée'].includes(facture.statut));
    this.unavailableFactures = filteredFactures.filter(facture => facture.statut === 'En retard');

    this.updateTotalPages();
  }

  updateTotalPages(): void {
    let totalItems: number;

    if (this.selectedTab === 0) {
      totalItems = this.paidFactures.length;
    } else if (this.selectedTab === 1) {
      totalItems = this.unpaidFactures.length;
    } else {
      totalItems = this.unavailableFactures.length;
    }

    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
  }


  onTabChanged(event: any) {
    this.selectedTab = event.index;
    this.updateTotalPages();
  }


  getTotalPaid(): number {
    return this.paidFactures.length;
  }

  getTotalUnpaid(): number {
    return this.unpaidFactures.length;
  }

  getTotalUnavailable(): number {
    return this.unavailableFactures.length;
  }
  revenir() {
    this.selectedFacture = null;
    this.selectedFactureName = '';
    this.showDetails = false;
  }
  // Méthode pour aller à une page spécifique
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Méthode appelée lorsqu'on change le nombre d'éléments par page
  onItemsPerPageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(selectElement.value, 10);
    this.currentPage = 1; // Réinitialiser à la première page
    this.calculateTotalPages(); // Recalculer le nombre total de pages
  }

  // Méthode pour calculer le nombre total de pages
  calculateTotalPages(): void {
    const totalItems = this.unpaidFactures.length; // Vous pouvez adapter pour chaque type de facture
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
  }

  // Méthode pour obtenir les éléments à afficher sur la page actuelle
  getPaginatedFactures(factures: Facture[]): Facture[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return factures.slice(startIndex, startIndex + this.itemsPerPage);
  }
  getTotalCommissionPaid(): number {
    return this.factures
      .filter((facture) => facture.statut === 'Payée')
      .reduce((total, facture) => total + facture.commissionPayee, 0);
  }
  getTotalCommissionUnPaid(): number {
    return this.factures
      .filter(
        (facture) =>
          facture.statut === 'En attente' ||
          facture.statut === 'Partiellement payée'
      )
      .reduce((total, facture) => total + facture.resteAPayer, 0);
  }
  getTotalCommissionUnavailable(): number {
    return this.factures
      .filter((facture) => facture.statut === 'En retard')
      .reduce((total, facture) => total + facture.resteAPayer, 0);
  }
}
