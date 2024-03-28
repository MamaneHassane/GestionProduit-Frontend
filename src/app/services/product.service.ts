import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, ProductDto} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Le chemin vers l'API ASP.NET
  apiUrl:string = "http://localhost:5163/api/products"

  // En-tête
  headers!: HttpHeaders

  // Injecter le client Http
  private http  = inject(HttpClient)

  constructor() {
    // le jeton d'accès
    let accessToken = localStorage.getItem("accessToken")
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    });
  }

  getNumberOfPagesByPageSize(pageSize:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/numberOfPages/${pageSize}`,{ headers : this.headers })
  }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { headers : this.headers }).pipe()
  }

  getProductsByPageNumber(pageNumber:number) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/page/${pageNumber}`,{ headers : this.headers }).pipe()
  }

  getProductsByPageNumberAndPageSize(pageNumber:number, pageSize:number) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/pageNumber/${pageNumber}/pageSize/${pageSize}`,
      { headers : this.headers }).pipe()
  }

  getProductDetails(productId: number) : Observable<Product> {
    return this.http.get<Product>(this.apiUrl+`/`+productId, { headers : this.headers})
  }

  addProduct(product:ProductDto) : Observable<Product> {
    console.log("In product service :: add")
    return this.http.post<Product>(this.apiUrl,product,{ headers : this.headers })
  }

  updateProduct(productId: number, product:ProductDto) : Observable<Product> {
    return this.http.put<Product>(this.apiUrl+`/`+productId,product,{ headers : this.headers })
  }

  deleteProduct(productId:number) : Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+`/`+productId,{ headers : this.headers });
  }

}
