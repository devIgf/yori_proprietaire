import { Routes } from '@angular/router';
import { LiaisonComponent } from './layouts/liaison/liaison.component';
import { GoogleMapComponent } from './tabs-pro/components/google-map/google-map.component';

export const routes: Routes = [
    {
        path:"",
        component: LiaisonComponent
    },

    {
        path:"map",
        component: GoogleMapComponent
    }
];
