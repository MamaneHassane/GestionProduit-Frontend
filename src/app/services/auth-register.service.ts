import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAuthenticationDto, UserAuthenticationResponseDto, UserRegistrationDto} from "../models/User";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private http = inject(HttpClient)

  // Le chemin vers l'API ASP.NET
  apiUrl:string = "http://localhost:5163"

  constructor(private _router: Router) { }

  registerUser(user:UserRegistrationDto) : Observable<UserRegistrationDto>  {
    return this.http.post<UserRegistrationDto>(`${this.apiUrl}/register`,user)
  }

  loginUser(user:UserAuthenticationDto) : Observable<UserAuthenticationResponseDto>  {
    return this.http.post<UserAuthenticationResponseDto>(`${this.apiUrl}/login`,user)
  }

  logoutUser(){
    localStorage.setItem("accessToken","")
    this._router.navigate(['']).then(r =>{
      console.log("User disconnected")
    })
  }

  isLoggedIn(){
    return localStorage.getItem("accessToken") != "";
  }

}
