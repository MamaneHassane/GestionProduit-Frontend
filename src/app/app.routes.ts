import { Routes } from '@angular/router';
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('../app/authentication-and-registration/authentication-and-registration.module')
      .then(m=>m.AuthenticationAndRegistrationModule)
  },
  {
    path : 'products',
    component: GestionProduitsComponent
  },
  {
    path: 'products/details/:product_id',
    component: ProductDetailsComponent
  },
  {
    path : '**',
    loadChildren : () => import('../app/page-not-found/page-not-found.module')
      .then(m=>m.PageNotFoundModule)
  },

];
