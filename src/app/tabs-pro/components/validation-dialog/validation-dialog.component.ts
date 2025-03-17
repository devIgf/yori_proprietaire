import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-validation-dialog',
  standalone: true,
  imports: [
    MatIconModule
    
  ],
  templateUrl: './validation-dialog.component.html',
  styleUrl: './validation-dialog.component.css'
})
export class ValidationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ValidationDialogComponent>) {}

}
