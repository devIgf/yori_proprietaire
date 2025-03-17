import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  photos: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<PhotoGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.photos) {
      this.photos = data.photos;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
