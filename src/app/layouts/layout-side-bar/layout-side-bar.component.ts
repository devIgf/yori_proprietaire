import { Component } from '@angular/core';
import { SideBarGestionUserComponent } from '../../tabs-pro/components/side-bar-gestion-user/side-bar-gestion-user.component';
import { RouterOutlet } from '@angular/router';
import { GestionComptesComponent } from '../../tabs-pro/components/gestion-comptes/gestion-comptes.component';
import { ListeUtilisateurComponent } from '../../tabs-pro/components/liste-utilisateur/liste-utilisateur.component';
import { GestionPermissionsComponent } from '../../tabs-pro/components/gestion-permissions/gestion-permissions.component';

@Component({
  selector: 'app-layout-side-bar',
  imports: [
    SideBarGestionUserComponent,
    RouterOutlet // Seul import nécessaire
    ,
    GestionComptesComponent,
    GestionPermissionsComponent
],
  templateUrl: './layout-side-bar.component.html',
  styleUrl: './layout-side-bar.component.css'
})
export class LayoutSideBarComponent {

}
