import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {CustomNavbarComponent} from "../components/custom-navbar/custom-navbar.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-gestion-produits',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgIf,
    NgFor,
    AsyncPipe,
    CustomNavbarComponent,
    FormsModule,
  ],
  templateUrl: './gestion-produits.component.html',
  styleUrl: './gestion-produits.component.css'
})
export class GestionProduitsComponent implements OnInit, OnChanges{

  // Injecter le service
  private _service = inject(ProductService);

  // Nombre de pages
  numberOfPages : number =3

  // Items par page
  numberPerPage: number = 1
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, i) => i);
  }
  // Page actuelle
  currentPage:number = 1

  goToPage(index:number){
    this._service.getProductsByPageNumberAndPageSize(index,this.numberPerPage).subscribe({
      next: (result) => {
        console.log(result)
        this.products=result;
        this.currentPage = index
        console.log(this.currentPage)
        console.log(this.products)
      }
    })
  }

  goToPreviousPage() {
    if(this.currentPage-1>=1)
      this.currentPage = this.currentPage-1
    else this.currentPage = 1
    this.goToPage(this.currentPage)
  }

  goToNextPage() {
    if(this.currentPage+1<=this.numberOfPages)
      this.currentPage = this.currentPage+1
    else this.currentPage = this.numberOfPages
    this.goToPage(this.currentPage)
  }

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
  public products!: Product[]

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.products = changes['products'].currentValue;
    }
  }

  // Supprimer un produit
  deleteProduct(productId:number) {
    this._service.deleteProduct(productId).subscribe({
      next : ()=>{console.log("Deleted"+productId)}
    })
  }


}
