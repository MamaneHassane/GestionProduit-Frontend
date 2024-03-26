import {Component, inject} from '@angular/core';
import {UserRegistrationDto} from "../../models/User";
import {AuthRegisterService} from "../../services/auth-register.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

  _service: AuthRegisterService = inject(AuthRegisterService)
  _router: Router = inject(Router)

  user: UserRegistrationDto = {
    email : '',
    password : ''
  };

  constructor() {}

  registerUser(){
    this._service.registerUser(this.user).subscribe({
      next : () => {
        console.log(this.user)
        console.log("Utilisateur inscrit avec succès !!")
        this._router.navigate(["/login"]).then(r => {
          console.log("Utilisateur rédirigé vers la page d'authentification !!")
        })
      },
      error : ()=>{
        console.log(this.user)
        console.log("Une erreur s'est produite !!")
      }
    })
  }

}
