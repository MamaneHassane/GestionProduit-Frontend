import {Component, inject, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductCardButtonComponent} from "../product-card-button/product-card-button.component";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    ProductCardButtonComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // Le produit qui sera affiché
  @Input()
  product!: Product

  @Input()
  onClickDetailsButton: any | undefined;

  @Input()
  onClickUpdateButton: any | undefined;

  onClickDeleteButton() {
    this._service.deleteProduct(this.product.productId).subscribe({
      next : ()=>{console.log("Deleted"+this.product.productId)}
    })
  }

  _service:ProductService = inject(ProductService)


}
