import { Component, EventEmitter, Output } from '@angular/core';
import { GestionComptesComponent } from '../gestion-comptes/gestion-comptes.component';
import { ListeUtilisateurComponent } from '../liste-utilisateur/liste-utilisateur.component';
import { GestionPermissionsComponent } from '../gestion-permissions/gestion-permissions.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-bar-gestion-user',
  imports: [
     RouterModule,
RouterOutlet,
  ],
  templateUrl: './side-bar-gestion-user.component.html',
  styleUrl: './side-bar-gestion-user.component.css'
})
export class SideBarGestionUserComponent {

}
