import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

interface Facture {
  id: number;
  nom: string;
  statut: string;
  dateLimite: string;
  commission: number;
  commissionPayee: number;
  resteAPayer: number;
  pays: string;
}

@Component({
  selector: 'app-facture-pro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule],
  templateUrl: './facture-pro.component.html',
  styleUrls: ['./facture-pro.component.css'],
})
export class FactureProComponent implements OnInit {
  showDetails: boolean = false;
  selectedStatut: string = "Vue d'ensemble"; // Valeur par défaut
  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedSousStatut: string = ''; // Initialiser comme une chaîne vide
  selectedPays: string = 'Tous les pays'; // Valeur par défaut
  paysFiltres: string[] = ['Tous les pays'];
  paidFactures: Facture[] = [];
  unpaidFactures: Facture[] = [];
  unavailableFactures: Facture[] = [];
  sousStatuts: { [key: string]: string[] } = {
    Hotellerrie: ['Hotel (s)', 'Motel (s)', 'Appartement (s)'],
    Tourisme: [
      'Autres',
      'Randonnés',
      'Parcs',
      'Campings',
      'Plages privées',
      'Maisons traditionnelles',
    ],
  };

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
    },
  ];

  selectedFacture: Facture | null = null; // Facture sélectionnée // ... autres propriétés et méthodes
  selectedFactureName: string = ''; // Nom de la facture sélectionnée // ... autres propriétés et méthodes
  currentPage: number = 1;
  itemsPerPage: number = 5; // Nombre d'éléments par page
  itemsPerPageOptions: number[] = [5, 10, 20]; // Options disponibles
  totalPages: number = 1;

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
    // Réinitialiser la sélection du sous-statut lorsque le statut change
    this.selectedSousStatut = this.sousStatuts[this.selectedStatut]?.[0] || '';
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

  // Méthode appelée lors du changement de pays
  onCountryChange() {
    this.filterFacturesByCountry(); // Réappliquer les filtres
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
