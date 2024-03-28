import { Routes } from '@angular/router';
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('../app/authentication-and-registration/authentication-and-registration.module')
      .then(m=>m.AuthenticationAndRegistrationModule)
  },
  {
    path : 'products',
    component: GestionProduitsComponent,
    canActivate : [authGuard]
  },
  {
    path : 'addProduct',
    component: AddProductComponent,
    canActivate : [authGuard]
  },
  {
    path : 'products/updateProduct/:product_id',
    component: UpdateProductComponent,
    canActivate : [authGuard]
  },
  {
    path: 'products/details/:product_id',
    component: ProductDetailsComponent,
    canActivate : [authGuard]
  },
  {
    path : '**',
    loadChildren : () => import('../app/page-not-found/page-not-found.module')
      .then(m=>m.PageNotFoundModule)
  },

];
