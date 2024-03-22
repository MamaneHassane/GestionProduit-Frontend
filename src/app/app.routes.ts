import { Routes } from '@angular/router';
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";

export const routes: Routes = [
  {
    path : 'produits',
    redirectTo : '/',
    pathMatch : "full"
  }

];
