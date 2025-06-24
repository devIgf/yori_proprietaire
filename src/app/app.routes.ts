import { Routes } from '@angular/router';
import { LiaisonComponent } from './layouts/liaison/liaison.component';
import { LiasonsMapComponent } from './tabs-pro/components/liasonsMap/liasonsMap.component';
import { LayoutSideBarComponent } from './layouts/layout-side-bar/layout-side-bar.component';
import { Component } from '@angular/core';
import { GestionComptesComponent } from './tabs-pro/components/gestion-comptes/gestion-comptes.component';
import { ListeUtilisateurComponent } from './tabs-pro/components/liste-utilisateur/liste-utilisateur.component';
import { GestionPermissionsComponent } from './tabs-pro/components/gestion-permissions/gestion-permissions.component';

export const routes: Routes = [
    {
        path:"",
        component: LiaisonComponent
    },

    {
        path:"map",
        component: LiasonsMapComponent
    },
    {
  path: "layout-side-bar",
  component: LayoutSideBarComponent,
  children: [
    { path: "gestion-comptes", component: GestionComptesComponent },
    { path: "liste-utilisateurs", component: ListeUtilisateurComponent }, // Notez le "s"
    { path: "gestion-permissions", component: GestionPermissionsComponent },
    { path: "", redirectTo: "gestion-comptes", pathMatch: "full" } // Route par défaut
  ]
}
];
