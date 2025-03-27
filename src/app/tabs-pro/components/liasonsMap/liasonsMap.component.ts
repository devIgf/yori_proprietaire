import { Component, OnInit } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-liasonsMap',
  standalone: true,
  imports: [GoogleMapComponent],
  templateUrl: './liasonsMap.component.html',
  styleUrls: ['./liasonsMap.component.css']
})
export class LiasonsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
