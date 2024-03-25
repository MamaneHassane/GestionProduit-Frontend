import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/Product";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "../components/product-card/product-card.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductCardComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  private _service = inject(ProductService)
  product :Product | undefined
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    let productId: number
    productId = this.route.snapshot.params['product_id']
    console.log("The product identifier is : " + productId)
    this._service.getProductDetails(productId).subscribe({
      next: (result)=> {
        this.product = result
      }
    })
  }

}
