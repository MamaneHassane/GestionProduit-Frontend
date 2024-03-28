import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthRegisterService} from "../../services/auth-register.service";

@Component({
  selector: 'app-custom-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './custom-navbar.component.html',
  styleUrl: './custom-navbar.component.css'
})
export class CustomNavbarComponent {
  constructor(private _service:AuthRegisterService) {
  }
  logoutUser(){
    this._service.logoutUser()
  }

}
