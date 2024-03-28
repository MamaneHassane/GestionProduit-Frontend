import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthRegisterService} from "./auth-register.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(private _router: Router, private _service: AuthRegisterService) { }
  canActivate(){
    // Si l'utilisateur est authentifié, on lui permet de passer
    if(this._service.isLoggedIn()) return true
    else {
      // Sinon on le redirige vers la page d'authentification
      this._router.navigate([""]).then(r => {
        alert("Veuillez d'abord vous authentifier s'il vous plaît");
      })
      return false
    }
  }

}
