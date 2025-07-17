import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:3000/user";


  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  saveUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  login(email: string, password: string): Observable<User[]> {
  const url = this.baseUrl + "?email=" + email + "&password=" + password;
  return this.http.get<User[]>(url);
}


}
