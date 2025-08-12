import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private baseUrl = environment.apiBaseUrl + '/employer/';

  constructor(
  private http: HttpClient,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object  
  ) { }

  registerEmployer(user: any, employer: any, logo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('employer', JSON.stringify(employer));
    formData.append('logo', logo);
    
    return this.http.post(this.baseUrl, formData);
  }

  getProfile(): Observable<Employer> {

    let headers = new HttpHeaders();
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');

      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<Employer>(`${this.baseUrl}profile`, { headers });
  }


}
