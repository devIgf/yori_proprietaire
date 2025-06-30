import { Component } from '@angular/core';
import { SideBarGestionUserComponent } from '../../tabs-pro/components/side-bar-gestion-user/side-bar-gestion-user.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-side-bar',
  imports: [
    SideBarGestionUserComponent,
    RouterOutlet
],
  templateUrl: './layout-side-bar.component.html',
  styleUrl: './layout-side-bar.component.css',
})
export class LayoutSideBarComponent {}
