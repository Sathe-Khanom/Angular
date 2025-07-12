import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${data.email}&password=${data.password}`).pipe(
      map(users => {
        if (users.length){ 
          localStorage.setItem('user', JSON.stringify(users[0]));
        return users[0];}
        else {
        throw new Error('Invalid credentials');
      }

      }),
      catchError(err => throwError(() => new Error('Login failed')))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

logout() {
  localStorage.removeItem('user');
}

getCurrentUser() {
  return JSON.parse(localStorage.getItem('user') || 'null');
}

isLoggedIn(): boolean {
  return this.getCurrentUser() !== null;
}


}


