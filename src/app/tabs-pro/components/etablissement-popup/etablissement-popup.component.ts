import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { ValidationDialogComponent } from '../validation-dialog/validation-dialog.component';

@Component({
  selector: 'app-etablissement-popup',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './etablissement-popup.component.html',
  styleUrl: './etablissement-popup.component.css'
})
export class EtablissementPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EtablissementPopupComponent>,
    private dialog: MatDialog
  ) {
    console.log(this.data.examStatus);
  }

  approve() {
    // Ferme le dialogue actuel avec l'état 'approved'
    this.dialogRef.close({ status: 'approved' });

    // Ouvre le dialogue de validation
    const validationDialogRef = this.dialog.open(ValidationDialogComponent, {
      width: '600px', 
      height: '200px',
      panelClass: 'custom-dialog-container'
    });

    // Optionnel : Vous pouvez gérer des actions après la fermeture du dialogue de validation
    validationDialogRef.afterClosed().subscribe(() => {
      console.log('Dialogue de validation fermé');
      // Vous pouvez ajouter d'autres actions ici si nécessaire
    });
  }

  decline() {
      this.dialogRef.close({ status: 'declined' });
  }

}
