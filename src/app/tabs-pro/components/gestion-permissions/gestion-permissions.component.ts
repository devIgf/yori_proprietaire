import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-permissions',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-permissions.component.html',
  styleUrl: './gestion-permissions.component.css',
})
export class GestionPermissionsComponent {
  updateSelection() {
    console.log('Selection updated');
  }
  showDropdownAdministrateur = false;
  showDropdownProprietes = false;
  showDropdownStatistiques = false;
  showDropdownPaiements = false;
  showDropdownModerateur = false;
  showDropdown = false;
  showDropdown1 = false;
  showDropdown2 = false;
  showDropdown3 = false;
  showDropdown4 = false;

  roles = [
    { id: 1, nom: 'Super administrateur', selected: false },
    { id: 2, nom: 'Gestion de Propriétés', selected: false },
    { id: 3, nom: 'Gestion de Statistiques', selected: false },
    { id: 4, nom: 'Gestion de Paiements', selected: false },
    { id: 5, nom: 'Moderateur de Contenu', selected: false },
  ];

  vues = [
    { id: 1, nom: 'Tous selectionnez', selected: false },
    { id: 2, nom: 'Accueil', selected: false },
    { id: 3, nom: 'Comptes propriétaires', selected: false },
    { id: 4, nom: 'Boite de reception', selected: false },
    { id: 5, nom: 'Notifications', selected: false },
    { id: 6, nom: 'Factures', selected: false },
    { id: 7, nom: 'Analyse', selected: false },
  ];

  permissions = [
    { id: 1, nom: 'voir uniquement', selected: false },
    { id: 2, nom: 'modifier', selected: false },
  ];
}
