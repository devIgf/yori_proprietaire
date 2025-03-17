import { Component } from '@angular/core';
import { HeaderProComponent } from "../header-pro/header-pro.component";
import { TabsProComponent } from '../../tabs-pro/tabs-pro.component';

@Component({
  selector: 'app-liaison',
  standalone: true,
  imports: [HeaderProComponent, TabsProComponent],
  templateUrl: './liaison.component.html',
  styleUrl: './liaison.component.css'
})
export class LiaisonComponent {

}
 