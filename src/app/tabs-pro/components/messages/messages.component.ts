import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HostListener, Renderer2 } from '@angular/core';

interface Message {
  id: number;
  content: string;
  subject?: string;
  date: Date;
  file: File | null;
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MatTabsModule, CommonModule, FormsModule, MatIcon],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  receivedMessages: Message[] = [
    {
      id: 1,
      content:
        "Informations importantes à propos de l'établissement hotel sotega 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus?",
      date: new Date('1996-03-01T23:30:00'),
      file: null,
    },
    {
      id: 2,
      content: 'Voici le message 2 avec plus de détails.',
      date: new Date(),
      file: null,
    },
    {
      id: 3,
      content: 'Message numéro 3 pour la discussion.',
      date: new Date(),
      file: null,
    },
    {
      id: 4,
      content: 'Détails supplémentaires du message 4.',
      date: new Date(),
      file: null,
    },
    {
      id: 5,
      content: 'Enfin, le message 5 pour conclure.',
      date: new Date(),
      file: null,
    },
  ];

  sentMessages: Message[] = []; // Liste des messages envoyés

  selectedMessage?: Message;
  isReplying = false;
  newMessage = false;
  messageSent = false;
  plusMessage: boolean = false;
  hotelClique: boolean = false;
  tourismeClique: boolean = false;

  // Propriétés pour la réponse
  replySubject: string = '';
  replyBody: string = '';
  selectedFile: File | null = null; // Initialiser avec null
  newMessage1 = true;
  replySubject1 = '';
  replyBody1 = '';
  showOptions = false;
  selectedOption = '';
  renderer: any;

  selectMessage(message: Message) {
    if (this.selectedMessage === message) {
      this.selectedMessage = undefined; // Ferme le message s'il est déjà ouvert
    } else {
      this.selectedMessage = message; // Ouvre le message sélectionné
    }
  }

  openReplyPopup() {
    this.isReplying = true;
    this.replySubject = ''; // Réinitialiser l'objet
    this.replyBody = ''; // Réinitialiser le corps
    this.selectedFile = null; // Réinitialiser le fichier sélectionné
  }

  sendNewMessage() {
    this.newMessage = true;
    this.replySubject = ''; // Réinitialiser l'objet
    this.replyBody = ''; // Réinitialiser le corps
  }

  closeReplyPopup() {
    this.isReplying = false;
    this.newMessage = false;
    this.messageSent = false;
  }

  submitReply() {
    if (this.replyBody.trim()) {
      // Vérifier que le corps du message n'est pas vide
      const newMessage: Message = {
        id: this.sentMessages.length + 1, // Générer un nouvel ID
        content: this.replyBody,
        subject: this.replySubject, // Utiliser la propriété 'subject'
        date: new Date(), // Définir la date actuelle
        file: this.selectedFile, // Stocker le fichier sélectionné
      };

      this.sentMessages.push(newMessage); // Ajouter le nouveau message à la liste des messages envoyés

      // Réinitialiser les champs après envoi
      this.closeReplyPopup();
      this.replySubject = '';
      this.replyBody = '';
      this.selectedFile = null; // Réinitialiser le fichier sélectionné
      this.submitReply2();

      console.log('Réponse au message envoyé:', newMessage);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Stocker le fichier sélectionné
    } else {
      this.selectedFile = null; // Assigner null si aucun fichier n'est sélectionné
    }
  }

  submitReply2() {
    this.messageSent = true;
    this.newMessage = false;
  }

  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  afficherFiltre(event: MouseEvent) {
    event.stopPropagation(); // Empêche la propagation vers l'écouteur global
    this.plusMessage = !this.plusMessage;
    this.hotelClique = false;
    this.tourismeClique = false;
  }
  afficherFiltreHotel() {
    this.hotelClique = !this.hotelClique;
    if (this.hotelClique) {
      this.tourismeClique = false;
    }
  }
  afficherFiltreTourisme() {
    this.tourismeClique = !this.tourismeClique;
    if (this.tourismeClique) {
      this.hotelClique = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Vérifie si le clic est en dehors de l'élément avec la classe "filtreMessage"
    if (!targetElement.closest('.filtreMessage')) {
      this.plusMessage = false;
      this.hotelClique = false;
      this.tourismeClique = false;
    }
  }
}
