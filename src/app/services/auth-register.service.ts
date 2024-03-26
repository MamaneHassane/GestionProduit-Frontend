import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAuthenticationDto, UserAuthenticationResponseDto, UserRegistrationDto} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private http = inject(HttpClient)

  // Le chemin vers l'API ASP.NET
  apiUrl:string = "http://localhost:5163"

  constructor() { }

  registerUser(user:UserRegistrationDto) : Observable<UserRegistrationDto>  {
    return this.http.post<UserRegistrationDto>(`${this.apiUrl}/register`,user)
  }

  loginUser(user:UserAuthenticationDto) : Observable<UserAuthenticationResponseDto>  {
    return this.http.post<UserAuthenticationResponseDto>(`${this.apiUrl}/login`,user)
  }

}
