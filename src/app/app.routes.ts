import { Routes } from '@angular/router';
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const routes: Routes = [
  {
    path : '',
    component: GestionProduitsComponent
  },
  {
    path : 'products',
    redirectTo : '/',
    pathMatch : "full"
  },
  {
    path: 'products/details/:product_id',
    component: ProductDetailsComponent
  }

];
