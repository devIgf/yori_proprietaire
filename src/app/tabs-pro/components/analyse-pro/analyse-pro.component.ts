import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { Etablissement } from '../../../interfaces/Etablissement';

import { registerables } from 'chart.js';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-analyse-pro',
  standalone: true,
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab,
    MatTableModule,
    FormsModule,
    
  ],
  template:`<div style="width: 400px; height: 400px">
            <canvas baseChart
                [data]="chartData"
                [type]="'bar'"
                [options]="chartOptions">
            </canvas>
            </div>`,
  templateUrl: './analyse-pro.component.html',
  styleUrl: './analyse-pro.component.css'
})
export class AnalyseProComponent implements OnInit, AfterViewInit{
    constructor(private cdRef: ChangeDetectorRef) {}
    public etablissements: Etablissement[] = [];
    public activeTabIndex: number = 0; // Pour suivre l'onglet actif


   // Variables pour stocker les totaux
    totalReservationsJour = 0;
    totalMontantJour = 0;
    totalAnnuleeJour = 0;
    totalCommissionJour = 0;

    totalReservationsSemaine = 0;
    totalMontantSemaine = 0;
    totalAnnuleeSemaine = 0;
    totalCommissionSemaine = 0;

    totalReservationsMois = 0;
    totalMontantMois = 0;
    totalAnnuleetMois = 0;
    totalCommissiontMois = 0;

    totalReservationsAnnee = 0;
    totalMontantAnnee = 0;
    totalAnnuleeAnnee = 0;
    totalCommissionAnnee = 0;

    selectedStatut = '';
    selectedPays = '';

     // Définition des options pour le filtre
     statuts = ['hôtellerie', 'tourisme'];
     paysList = ['Gabon', 'Sénégal', 'Kenya', 'RDC'];

    private filterSubject = new BehaviorSubject<void>(undefined);
        ngOnInit(): void {
        this.etablissements = [
        {
            statut: 'hôtellerie',
            nom: 'Hotel Paradis',
            pays: 'Gabon',
            nombreReservations: { jour: 120, semaine: 300, mois: 1000, annee: 12000 },
            nombreReservationsAnnulees: { jour: 1, semaine: 3, mois: 10, annee: 50 },
            montantReservations: { jour: 500, semaine: 3000, mois: 10000, annee: 120000 },
            montantCommissions: { jour: 50, semaine: 300, mois: 1000, annee: 12000 }
        },
        {
            statut: 'hôtellerie',
            nom: 'Radisson Blu Okoume Palace Hotel',
            pays: 'Gabon',
            nombreReservations: { jour: 8, semaine: 40, mois: 150, annee: 1800 },
            nombreReservationsAnnulees: { jour: 2, semaine: 5, mois: 15, annee: 70 },
            montantReservations: { jour: 800, semaine: 4000, mois: 12000, annee: 144000 },
            montantCommissions: { jour: 80, semaine: 400, mois: 1200, annee: 14400 }
        },
        {
            statut: 'hôtellerie',
            nom: 'Hotel Fly Gabon',
            pays: 'Gabon',
            nombreReservations: { jour: 6, semaine: 35, mois: 120, annee: 1500 },
            nombreReservationsAnnulees: { jour: 1, semaine: 4, mois: 12, annee: 60 },
            montantReservations: { jour: 600, semaine: 3500, mois: 11000, annee: 130000 },
            montantCommissions: { jour: 60, semaine: 350, mois: 1100, annee: 13000 }
        },
        {
            statut: 'tourisme',
            nom: 'Hotel du Lion',
            pays: 'Sénégal',
            nombreReservations: { jour: 10, semaine: 50, mois: 200, annee: 2400 },
            nombreReservationsAnnulees: { jour: 3, semaine: 6, mois: 20, annee: 90 },
            montantReservations: { jour: 1000, semaine: 5000, mois: 20000, annee: 240000 },
            montantCommissions: { jour: 100, semaine: 500, mois: 2000, annee: 24000 }
        },
        {
            statut:'tourisme',
            nom:'Mövenpick Hotel Abidjan',
            pays:'RDC',
            nombreReservations:{jour :7 ,semaine :42 ,mois :150 ,annee :1800},
            nombreReservationsAnnulees:{jour :2 ,semaine :4 ,mois :14 ,annee :80},
            montantReservations:{jour :700 ,semaine :4200 ,mois :15000 ,annee :180000},
            montantCommissions:{jour :70 ,semaine :420 ,mois :1500 ,annee :18000}
        },
        {
            statut:'hôtellerie',
            nom:'Hotel Kenya',
            pays:'Kenya',
            nombreReservations:{jour :5 ,semaine :40 ,mois :148 ,annee :1800},
            nombreReservationsAnnulees:{jour :2 ,semaine :4 ,mois :14 ,annee :80},
            montantReservations:{jour :700 ,semaine :4200 ,mois :15000 ,annee :180000},
            montantCommissions:{jour :70 ,semaine :420 ,mois :1500 ,annee :18000}
        },
        {
            statut:'hôtellerie',
            nom:'Azalaï Hotel Dakar',
            pays:'Sénégal',
            nombreReservations:{jour :12 ,semaine :60 ,mois :250 ,annee :3000},
            nombreReservationsAnnulees:{jour :4 ,semaine :8 ,mois :25 ,annee :120},
            montantReservations:{jour :1200 ,semaine :6000 ,mois :25000 ,annee :300000},
            montantCommissions:{jour :120 ,semaine :600 ,mois :2500 ,annee :30000}
        }
        ];

        this.calculateTotals(); // Calcul initial des totaux
        this.filterSubject.subscribe(() => {
        this.calculateTotals();  // Recalcule les totaux immédiatement après chaque changement de filtre
        this.cdRef.detectChanges();  // Forcer la détection des changements
      });
    }

    calculateTotals() {
        const filteredEtablissements = this.applyFilters();
        
        // Calcul des totaux
        this.totalReservationsJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.jour, 0);
        this.totalMontantJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.jour, 0);
        this.totalAnnuleeJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservationsAnnulees.jour, 0);
        this.totalCommissionJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantCommissions.jour, 0);

      
        this.totalReservationsSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.semaine, 0);
        this.totalMontantSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.semaine, 0);
        this.totalAnnuleeSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservationsAnnulees.semaine, 0);
        this.totalCommissionSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantCommissions.semaine, 0);

      
        this.totalReservationsMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.mois, 0);
        this.totalMontantMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.mois, 0);
        this.totalAnnuleetMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservationsAnnulees.mois, 0);
        this.totalCommissiontMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantCommissions.mois, 0);


      
        this.totalReservationsAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.annee, 0);
        this.totalMontantAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.annee, 0);
        this.totalAnnuleeAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservationsAnnulees.annee, 0);
        this.totalCommissionAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantCommissions.annee, 0);
      
      }
      

    
    applyFilters() {
    return this.etablissements.filter(etablissement => {
        const matchesStatut = !this.selectedStatut || etablissement.statut === this.selectedStatut;
        const matchesPays = !this.selectedPays || etablissement.pays === this.selectedPays;
        return matchesStatut && matchesPays;
    });
    }

    onFilterChange() {
        this.filterSubject.next();  // Déclenche la mise à jour des totaux
    }



    ngAfterViewInit(): void {
        this.initChart();


        this.createChart('reservation', 'Nombre de Réservations', this.etablissements.map(e => e.nombreReservations));
        this.createChart('reservation-annulee', 'Nombre de Réservations Annulées', this.etablissements.map(e => e.nombreReservationsAnnulees));
        this.createChart('montant-reservation', 'Montant des Réservations', this.etablissements.map(e => e.montantReservations));
        this.createChart('montant-commission', 'Montant des Commissions', this.etablissements.map(e => e.montantCommissions));
      }
    
      
      createChart(containerId: string, titleText: string, dataArray: any[]): void {
        // Vérifiez que dataArray contient des objets avec les propriétés appropriées
        const data = [
            dataArray.map(e => e.jour),     // Données pour "Jour"
            dataArray.map(e => e.semaine),  // Données pour "Semaine"
            dataArray.map(e => e.mois),     // Données pour "Mois"
            dataArray.map(e => e.annee)     // Données pour "Année"
        ];
    
        // Log des données pour vérifier leur structure
        console.log('Data for chart:', data);
    
        // Highcharts.chart(containerId, {
        //     chart: {
        //         type: 'line'
        //     },
        //     title: {
        //         text: titleText
        //     },
        //     xAxis: {
        //         type: 'category',
        //         categories: ['Jour', 'Semaine', 'Mois', 'Année'] // Assurez-vous que cela correspond aux données
        //     },
        //     yAxis: {
        //         title: {
        //             text: titleText
        //         }
        //     },
        //     series: [
        //         { name: 'Jour', data: data[0] },     // Assurez-vous que data[0] a le bon nombre d'éléments
        //         { name: 'Semaine', data: data[1] },  // Assurez-vous que data[1] a le bon nombre d'éléments
        //         { name: 'Mois', data: data[2] },     // Assurez-vous que data[2] a le bon nombre d'éléments
        //         { name: 'Année', data: data[3] }     // Assurez-vous que data[3] a le bon nombre d'éléments
        //     ]
        // } as Highcharts.Options);
    }
    
    
    onTabChange(event: { index: number }): void {
        this.activeTabIndex = event.index; // Met à jour l'index de l'onglet actif
        switch (this.activeTabIndex) {
            case 0:
                this.createChart('reservation', 'Nombre de Réservations', this.etablissements.map(e => e.nombreReservations));
                break;
            case 1:
                this.createChart('reservation-annulee', 'Nombre de Réservations Annulées', this.etablissements.map(e => e.nombreReservationsAnnulees));
                break;
            case 2:
                this.createChart('montant-reservation', 'Montant des Réservations', this.etablissements.map(e => e.montantReservations));
                break;
            case 3:
                this.createChart('montant-commission', 'Montant des Commissions', this.etablissements.map(e => e.montantCommissions));
                break;
        }
    }

    
    
    
    // Méthode pour calculer le total d'une propriété spécifique
    calculateTotal(propertyName: keyof Etablissement): number {
        return this.etablissements.reduce((total, e) => {
            const propertyValue = e[propertyName];

            // Utilisation de l'assertion de type
            if (typeof propertyValue === 'object' && propertyValue !== null) {
                return total + (propertyValue as { jour: number }).jour; // Assertion de type pour accéder à 'jour'
            }

            return total; // Si la propriété n'est pas un objet ou est null, retourner le total actuel
        }, 0);
    }
    

    @ViewChild('chartCanvas') private chartCanvas!: ElementRef<HTMLCanvasElement>;


    private initChart(): void {
        // Données d'origine (exemple)
        const performanceData = [
            { name: 'Total Réservations', value: this.calculateTotal('nombreReservations') },
            { name: 'Total Réservations Annulées', value: this.calculateTotal('nombreReservationsAnnulees') },
            { name: 'Total Montant des Réservations', value: this.calculateTotal('montantReservations') },
            { name: 'Total Montant des Commissions', value: this.calculateTotal('montantCommissions') }
        ];
    
        Chart.register(...registerables);
    
        new Chart(this.chartCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: performanceData.map(item => item.name),
                datasets: [{
                    label: 'Performances Totales',
                    data: performanceData.map(item => item.value),
                    backgroundColor: this.generateBarColors(performanceData.length),
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    borderRadius: 4 // Bords arrondis pour le style moderne
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false // Masque la légende pour les barres (optionnel)
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.label}: ${context.raw}`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false // Désactive les grilles verticales
                        }
                    }
                }
            }
        });
    }
    
    // Génère des couleurs dynamiquement
    private generateBarColors(count: number): string[] {
        const baseColors = [
            '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
            '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'
        ];
    
        return Array.from({ length: count }, (_, i) => {
            const baseColor = baseColors[i % baseColors.length];
            return this.adjustBrightness(baseColor, i / baseColors.length * 10);
        });
    }
    
    // Assombrit légèrement les couleurs répétées
    private adjustBrightness(hex: string, percent: number): string {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        
        const r = Math.max(0, Math.min(255, (num >> 16) - amt));
        const g = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) - amt));
        const b = Math.max(0, Math.min(255, (num & 0x0000FF) - amt));
        
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    }
    
}
