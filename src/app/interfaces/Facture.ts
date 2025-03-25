export interface Facture {
    id: number;
    nom: string;
    type: string;
    statut: string;
    dateLimite: string;
    commission: number;
    commissionPayee: number;
    resteAPayer: number;
    pays: string;
  }
  