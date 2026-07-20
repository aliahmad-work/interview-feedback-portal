import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { LoginRequest } from "../models/login-request.model";
import { LoginResponse } from "../models/login-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const payload: LoginRequest = { email, password };

    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, payload)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token)
        }),
        catchError((error) => {
          console.error('Login Error:', error);
          return throwError(() => error);
        })
      );
  }

}