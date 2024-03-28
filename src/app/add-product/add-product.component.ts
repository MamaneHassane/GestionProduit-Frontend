import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Product, ProductDto} from "../models/Product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {CustomNavbarComponent} from "../components/custom-navbar/custom-navbar.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
    imports: [
        FormsModule,
        CustomNavbarComponent
    ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  // Injecter httpClient
  http:HttpClient = inject(HttpClient)

  // Injecter un routeur
  _router = inject(Router)

  // Le service des produits
  _service:ProductService = inject(ProductService)

  // Un produit vide
  product:ProductDto = {
    productName : "",
    productDescription : "",
    productImageUrl : ""
  }

  // Ajout de produit
  addProduct() {
    console.log(localStorage.getItem("accessToken"))
    console.log(this.product)
    this._service.addProduct(this.product).subscribe({
      next : (response) => {
        console.log("Produit ajouté avec succès !!")
        this._router.navigate(["products"]).then(r => {
          console.log("Utilisateur rédirigé vers la liste des produits !!")
        })
      }
    })

  }

}
