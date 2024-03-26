import { Component } from '@angular/core';
import {AuthenticationPageComponent} from "../authentication-page/authentication-page.component";
import {NgIf} from "@angular/common";
import {RegistrationPageComponent} from "../registration-page/registration-page.component";

@Component({
  selector: 'app-auth-register-parent',
  standalone: true,
  imports: [
    AuthenticationPageComponent,
    NgIf,
    RegistrationPageComponent
  ],
  templateUrl: './auth-register-parent.component.html',
  styleUrl: './auth-register-parent.component.css'
})
export class AuthRegisterParentComponent {
  haveAccount: boolean = false;
  switchPage() : void {
    this.haveAccount = !this.haveAccount
  }

}
