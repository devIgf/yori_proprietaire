export interface Etablissement {
    statut: 'hôtellerie' | 'tourisme';
    nom: string;
    pays: 'Gabon' | 'Sénégal' | 'Kenya' | 'RDC';
    nombreReservations: {
        jour: number;
        semaine: number;
        mois: number;
        annee: number;
    };
    nombreReservationsAnnulees: {
        jour: number;
        semaine: number;
        mois: number;
        annee: number;
    };
    montantReservations: {
        jour: number;
        semaine: number;
        mois: number;
        annee: number;
    };
    montantCommissions: {
        jour: number;
        semaine: number;
        mois: number;
        annee: number;
    };
  }
  