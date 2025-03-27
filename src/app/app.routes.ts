import { Routes } from '@angular/router';
import { LiaisonComponent } from './layouts/liaison/liaison.component';
import { LiasonsMapComponent } from './tabs-pro/components/liasonsMap/liasonsMap.component';

export const routes: Routes = [
    {
        path:"",
        component: LiaisonComponent
    },

    {
        path:"map",
        component: LiasonsMapComponent
    }
];
