import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HostListener } from '@angular/core';
import { Message } from '../../../interfaces/Message';



@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MatTabsModule, CommonModule, FormsModule, MatIcon],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  receivedMessages: Message[] = 
  [
    {
      id: 1, content: 'Informations importantes à propos de l\'établissement hotel sotega 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus?', date: new Date('1996-03-01T23:30:00'),
      file: null,showDropdown: false
    },
    {
      id: 2, content: 'Voici le message 2 avec plus de détails.', date: new Date(),
      file: null,showDropdown: false
    },
    {
      id: 3, content: 'Message numéro 3 pour la discussion.', date: new Date(),
      file: null,showDropdown: false
    },
    {
      id: 4, content: 'Détails supplémentaires du message 4.', date: new Date(),
      file: null,showDropdown: false
    },
    {
      id: 5, content: 'Enfin, le message 5 pour conclure.', date: new Date(),
      file: null,showDropdown: false
    }
  ];

sentMessages: Message[] = []; // Liste des messages envoyés

selectedMessage?: Message;
isReplying = false;
newMessage = false;
messageSent = false;

// Propriétés pour la réponse
replySubject: string = '';
replyBody: string = '';
selectedFile: File | null = null;
favoriteMessage: any;



selectMessage(message: Message) {
  if (this.selectedMessage === message) {
      this.selectedMessage = undefined; // Ferme le message s'il est déjà ouvert
  } else {
      this.selectedMessage = message; // Ouvre le message sélectionné
  }
}

// showDropdownMenu = false;
showDropdown(message: any) {
  message.showDropdown = !message.showDropdown;
}


@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
const target = event.target as HTMLElement;
if (target && !target.closest('.corner-button') && !target.closest('.dropdown-menu')) {
  this.receivedMessages.forEach(message => {
    message.showDropdown = false;
  });
}
}


openReplyPopup() {
    this.isReplying = true;
    this.replySubject = ''; // Réinitialiser l'objet
    this.replyBody = ''; // Réinitialiser le corps
    this.selectedFile = null; // Réinitialiser le fichier sélectionné
}

sendNewMessage(){
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
    if (this.replyBody.trim()) { // Vérifier que le corps du message n'est pas vide
        const newMessage: Message = {
          id: this.sentMessages.length + 1, // Générer un nouvel ID
          content: this.replyBody,
          subject: this.replySubject, // Utiliser la propriété 'subject'
          date: new Date() // Définir la date actuelle
          ,
          file: this.selectedFile, // Stocker le fichier sélectionné
          showDropdown: false
        };

        this.sentMessages.push(newMessage); 
        this.closeReplyPopup();
        this.replySubject = '';
        this.replyBody = '';
        this.selectedFile = null; 
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


submitReply2(){
  this.messageSent = true;
  this.newMessage = false;
}

getFileUrl(file: File): string {
  return URL.createObjectURL(file);
}

isImage(file: File): boolean {
  return file.type.startsWith('image/');
}

favoriteMessages: number[] = [];

get favoriteMessagesList() {
  return this.receivedMessages.filter(message => this.favoriteMessages.includes(message.id));
}

 addToFavorites(message: Message) {
  if (!this.favoriteMessages.includes(message.id)) {
    this.favoriteMessages.push(message.id);
  }
  message.showDropdown = false; // Ferme le menu déroulant
}

selectedFavoriteMessage?: Message;

selectFavoriteMessage(message: Message) {
  if (this.selectedFavoriteMessage === message) {
    this.selectedFavoriteMessage = undefined; // Ferme le message s'il est déjà ouvert
  } else {
    this.selectedFavoriteMessage = message; // Ouvre le message sélectionné
  }
}
}
