import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthRegisterParentComponent} from "./auth-register-parent/auth-register-parent.component";
import {AuthenticationPageComponent} from "./authentication-page/authentication-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

const routes: Routes = [
  {
    path : '',
    component : AuthRegisterParentComponent
  },
  {
    path : 'login',
    component : AuthenticationPageComponent
  },
  {
    path : 'register',
    component : RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationAndRegistrationRoutingModule { }
