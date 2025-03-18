export interface Comment {
    id: number;
    userId: string; // Identifiant de l'utilisateur
    content: string;
    createdDate: Date;
    rating: number; // Appréciation entre 1 et 5
    replies: Comment[];
}
