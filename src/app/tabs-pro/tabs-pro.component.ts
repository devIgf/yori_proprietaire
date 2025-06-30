import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FooterProComponent } from '../layouts/footer-pro/footer-pro.component';
import { AccueilProComponent } from './components/accueil/accueil-pro.component';
import { AnalyseProComponent } from './components/analyse-pro/analyse-pro.component';
import { CompteProprietaireComponent } from './components/compte-proprietaire/compte-proprietaire.component';
import { FactureProComponent } from './components/facture-pro/facture-pro.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-tabs-pro',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    MatIcon,
    FooterProComponent,
    AccueilProComponent,
    CompteProprietaireComponent,
    MessagesComponent,
    NotificationsComponent,
    FactureProComponent,
    AnalyseProComponent,
    RouterOutlet
],
  templateUrl: './tabs-pro.component.html',
  styleUrl: './tabs-pro.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TabsProComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  activeTabIndex: number = 0;

  // Tableau des routes correspondant à chaque onglet (7 routes, index 0 à 6)
  tabRoutes = [
    '/Accueil',
    '/Comptes-propriétaires',
    '/Boite-reception',
    '/Notifications',
    '/Factures',
    '/Analyse',
    '/gestion-comptes'  // 7ème onglet (index 6)
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedIndex = sessionStorage.getItem('activeTabIndex');
    if (storedIndex) {
      this.activeTabIndex = +storedIndex;
      this.router.navigateByUrl(this.tabRoutes[this.activeTabIndex]);
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      const index = this.tabRoutes.findIndex(route => url.startsWith(route));
      if (index !== -1 && index !== this.activeTabIndex) {
        this.activeTabIndex = index;
        if (this.tabGroup) {
          this.tabGroup.selectedIndex = index;
        }
        sessionStorage.setItem('activeTabIndex', index.toString());
      }
    });
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    sessionStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
    this.router.navigateByUrl(this.tabRoutes[this.activeTabIndex]);
  }
}

