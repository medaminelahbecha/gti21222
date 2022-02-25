import { Injectable } from '@angular/core';
import {CredentialsDto} from "./dto/credentials.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "./dto/login-response.dto";
import {HttpClient} from "@angular/common/http";
import {APIS} from "../config/apis.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APIS.login, credentials);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
