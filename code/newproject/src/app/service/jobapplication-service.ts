import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobApplication } from '../model/jobapplication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobapplicationService {
  
   private apiUrl = 'http://localhost:3000/api/jobs'; 
  constructor(private http: HttpClient) {}

  getApplicationForJob(jobId: number): Observable<JobApplication[]> {
    const url = `${this.apiUrl}/${jobId}/applicants`;
    return this.http.get<JobApplication[]>(url);
  }
}
