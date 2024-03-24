import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card-button',
  standalone: true,
  imports: [],
  templateUrl: './product-card-button.component.html',
  styleUrl: './product-card-button.component.css'
})
export class ProductCardButtonComponent {

  @Input()
  public imagePath : string | undefined

}
