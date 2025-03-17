import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


// Interface pour les options du graphique
interface ChartOptions {
  chart: {
      type: string;
      zoomType: string;
  };
  title: {
      text: string;
  };
  yAxis: {
      title: {
          text: string;
      };
  };
  xAxis: {
      categories: string[];
  };
  series: Highcharts.SeriesOptionsType[]; // Utilisation du type approprié pour les séries
  tooltip: {
      shared: boolean;
      valueSuffix: string;
  };
}

@Component({
  selector: 'app-claudel',
  standalone: true,
  imports: [
    HighchartsChartModule
  ],
  templateUrl: './claudel.component.html',
  styleUrl: './claudel.component.css'
})
export class ClaudelComponent implements OnInit{
  public options!: ChartOptions;

    Highcharts = Highcharts; // Référence à Highcharts
  
    ngOnInit() {
      this.options = {
        chart: {
          type: 'spline', // Type de graphique
          zoomType: 'x'   // Permet le zoom sur l'axe X
        },
        title: {
          text: ''
        },
        yAxis: {
          title: { text: '' }
        },
        xAxis: {
          categories: ['10PM', '12PM', '14PM', '16PM', '18PM', '20PM'] // Catégories pour l'axe X
        },
        series: [
          {
            name: 'Jour',
            data: [500, 700, 300, 800, 650, 900],
            color: '#FF4D50',
            type: 'spline' // Type de la série
          },
          {
            name: 'Semaine',
            data: [300, 400, 450, 450, 500, 400],
            color: '#77B5FE',
            type: 'spline' // Type de la série
          },
          {
            name: 'Mois',
            data: [6000, 7000, 8000, 7500, 9000, 8500],
            color: '#FFD700',
            type: 'spline' // Type de la série
          },
          {
            name: 'Année',
            data: [70000, 80000, 75000, 90000, 85000, 95000],
            color: '#32CD32',
            type: 'spline' // Type de la série
          }
        ],
        tooltip: {
          shared: true,
          valueSuffix: ' visiteurs'
        }
      };
    }
}
 