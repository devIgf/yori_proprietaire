// shared-tab.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class SharedTabService {
  // Émetteur pour le client sélectionné
  private selectedClientSource = new BehaviorSubject<Client | null>(null);
  selectedClient$ = this.selectedClientSource.asObservable();

  // Émetteur pour la demande d'ouverture d'onglet
  private openAccueilTabSource = new BehaviorSubject<boolean>(false);
  openAccueilTab$ = this.openAccueilTabSource.asObservable();

  // Méthode appelée lors du clic sur "Voir plus"
  selectClient(client: Client) {
    this.selectedClientSource.next(client);
  }

  // Méthode pour déclencher l'ouverture de l'onglet
  openAccueilTab() {
    this.openAccueilTabSource.next(true);
  }
}