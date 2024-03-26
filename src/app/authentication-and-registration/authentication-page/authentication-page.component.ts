import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthRegisterService} from "../../services/auth-register.service";
import {Router} from "@angular/router";
import {UserAuthenticationDto, UserRegistrationDto} from "../../models/User";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent {

  _service: AuthRegisterService = inject(AuthRegisterService)
  _router: Router = inject(Router)

  user: UserAuthenticationDto = {
    email : '',
    password : ''
  };

  constructor() {}

  loginUser(){
    this._service.loginUser(this.user).subscribe({
      next : (response) => {
        console.log(this.user)
        console.log("Access token :"+ response.accessToken)
        console.log("Refresh token :"+ response.refreshToken)
        localStorage.setItem("accessToken",response.accessToken)
        localStorage.setItem("refreshToken",response.accessToken)
        console.log("Utilisateur authentifié avec succès !!")
        this._router.navigate(["/products"]).then(r => {
          console.log("Utilisateur rédirigé vers la page de gestion de produits !!")
        })
      },
      error : ()=>{
        console.log(this.user)
        alert("Le mot de passe ou le nom d'utilisateur est incorrect")
        console.log("Une erreur s'est produite !!")
      }
    })
  }


}
