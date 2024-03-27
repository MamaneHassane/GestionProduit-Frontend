import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Le chemin vers l'API ASP.NET
  apiUrl:string = "http://localhost:5163/api/products"

  // Injecter le client Http
  private http  = inject(HttpClient)

  constructor() { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe()
  }

  getProductsByPageNumber(pageNumber:number) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/page/${pageNumber}`).pipe()
  }

  getProductsByPageNumberAndPageSize(pageNumber:number, pageSize:number) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/pageNumber/${pageNumber}/pageSize/${pageSize}`).pipe()
  }

  getProductDetails(productId: number) : Observable<Product> {
    return this.http.get<Product>(this.apiUrl+`/`+productId)
  }

  addProduct(product:Product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl,product)
  }

  updateProduct(productId: number, product:Product) : Observable<Product> {
    return this.http.put<Product>(this.apiUrl+`/`+productId,product)
  }

  deleteProduct(productId:number) : Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+`/`+productId);
  }

}
