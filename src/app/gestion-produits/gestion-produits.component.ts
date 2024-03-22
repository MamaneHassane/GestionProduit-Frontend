import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion-produits',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgIf,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './gestion-produits.component.html',
  styleUrl: './gestion-produits.component.css'
})
export class GestionProduitsComponent implements OnInit, OnChanges{

  // Injecter le service
  private _service = inject(ProductService);

  constructor() {
    // Retrouver la liste des produits
    this._service.getAllProducts().subscribe({
      next: (result) => {
        console.log(result)
        this.products=result;
        console.log(this.products)
      }
    })
  }

  // Le tableau de tous les produits
  public products: Product[] = []

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.products = changes['products'].currentValue;
    }
  }

  // Supprimer un produit
  deleteProduct(productId:number): void {
    this._service.deleteProduct(productId).subscribe({
      next : ()=>{console.log("Deleted"+productId)}
    })

  }

  doLog(){
    console.log("Log")
  }

}
