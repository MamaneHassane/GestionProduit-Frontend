import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {ProductDto} from "../models/Product";
import {FormsModule} from "@angular/forms";
import {CustomNavbarComponent} from "../components/custom-navbar/custom-navbar.component";

@Component({
  selector: 'app-update-product',
  standalone: true,
    imports: [
        FormsModule,
        CustomNavbarComponent
    ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
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

  // L'identifiant du produit
  productId!: number

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.productId = this.route.snapshot.params['product_id']

    this._service.getProductDetails(this.productId).subscribe({
      next : (response)=>{
        this.product.productName = response.productName;
        this.product.productDescription = response.productDescription;
        this.product.productImageUrl = response.productImageUrl;
      }
    })
  }

  // Mise à jour du produit
  updateProduct() {
    console.log(localStorage.getItem("accessToken"))
    console.log(this.product)
    this._service.updateProduct(this.productId,this.product).subscribe({
      next : (response) => {
        console.log("Produit ajouté avec succès !!")
        this._router.navigate(["products"]).then(r => {
          console.log("Utilisateur rédirigé vers la liste des produits !!")
        })
      }
    })
  }

}



