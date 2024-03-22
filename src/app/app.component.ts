import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GestionProduitsComponent} from "./gestion-produits/gestion-produits.component";
import {CustomNavbarComponent} from "./components/custom-navbar/custom-navbar.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GestionProduitsComponent, CustomNavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP-SOMEI-Angular-Frontend';
}
