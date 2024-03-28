import {Component, OnInit} from '@angular/core';
import {AuthenticationPageComponent} from "../authentication-page/authentication-page.component";
import {NgIf} from "@angular/common";
import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {AuthRegisterService} from "../../services/auth-register.service";
import {Router} from "@angular/router";

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
export class AuthRegisterParentComponent implements OnInit{

  haveAccount: boolean = true;

  constructor(private _service: AuthRegisterService, private _router:Router) {
  }
  switchPage() : void {
    this.haveAccount = !this.haveAccount
  }

  ngOnInit(){
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if(this._service.isLoggedIn()) this._router.navigate(["/products"]).then(r => {
      console.log("Vous êtes déjà authentifié")
    })
  }

}
