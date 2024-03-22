import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductCardButtonComponent} from "../product-card-button/product-card-button.component";

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
  product: Product | undefined

  @Input()
  onClickDetailsButton: void | undefined

  @Input()
  onClickUpdateButton: void | undefined

  @Input()
  onClickDeleteButton: void | undefined
}
