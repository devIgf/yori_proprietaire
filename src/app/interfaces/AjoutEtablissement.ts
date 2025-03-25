export interface AjoutEtablissement {
    title: string;
    id: number;
    date: Date;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    nombreEtablissement: number;
    pays: string;
    ville: string;
    nomEtablissement: string;
    service: string;
    typePropriete: string;
    adresse: string;
    photos?: { url: string; alt?: string }[];
    buttonText?: string;
    examStatus: 'pending' | 'approved' | 'declined' | 'waiting';
  }