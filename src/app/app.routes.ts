import { Routes } from '@angular/router';
import { LiaisonComponent } from './layouts/liaison/liaison.component';
import { LiasonsMapComponent } from './tabs-pro/components/liasonsMap/liasonsMap.component';
import { LayoutSideBarComponent } from './layouts/layout-side-bar/layout-side-bar.component';
import { Component } from '@angular/core';
import { GestionComptesComponent } from './tabs-pro/components/gestion-comptes/gestion-comptes.component';
import { ListeUtilisateurComponent } from './tabs-pro/components/liste-utilisateur/liste-utilisateur.component';
import { GestionPermissionsComponent } from './tabs-pro/components/gestion-permissions/gestion-permissions.component';
import { AccueilProComponent } from './tabs-pro/components/accueil/accueil-pro.component';
import { MessagesComponent } from './tabs-pro/components/messages/messages.component';
import { NotificationsComponent } from './tabs-pro/components/notifications/notifications.component';
import { FactureProComponent } from './tabs-pro/components/facture-pro/facture-pro.component';
import { AnalyseProComponent } from './tabs-pro/components/analyse-pro/analyse-pro.component';

export const routes: Routes = [
{
  path: '',
  component: LiaisonComponent,
  children: [
    {
      path: '',
      component: LayoutSideBarComponent,
      children: [
        { path: 'Accueil', component: AccueilProComponent },
        { path: 'Comptes-propriétaires', component: GestionComptesComponent },
        { path: 'Boite-reception', component: MessagesComponent },
        { path: 'Notifications', component: NotificationsComponent },
        { path: 'Factures', component: FactureProComponent },
        { path: 'Analyse', component: AnalyseProComponent },

        { path: 'gestion-comptes', component: GestionComptesComponent },
        { path: 'liste-utilisateurs', component: ListeUtilisateurComponent },
        { path: 'gestion-permissions', component: GestionPermissionsComponent },

        { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
      ],
    },
  ],
}
,
  {
    path: 'map',
    component: LiasonsMapComponent,
  },
];
