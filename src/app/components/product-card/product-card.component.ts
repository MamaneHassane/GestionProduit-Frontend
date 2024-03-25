import {Component, inject, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductCardButtonComponent} from "../product-card-button/product-card-button.component";
import {ProductService} from "../../services/product.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    ProductCardButtonComponent,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // Le produit qui sera affiché
  @Input()
  product!: Product

  onClickDeleteButton() {
    this._service.deleteProduct(this.product.productId).subscribe({
      next : ()=>{
        location.reload()
        console.log("Deleted"+this.product.productId)
      }
    })
  }

  onClickDetailsButton() {
    this._service.getProductDetails(this.product.productId).subscribe({
      next : ()=>{console.log("To details "+this.product.productId)}
    })
  }

  onClickUpdateButton() {
    this._service.deleteProduct(this.product.productId).subscribe({
      next : ()=>{console.log("To update "+this.product.productId)}
    })
  }

  _service:ProductService = inject(ProductService)


}
