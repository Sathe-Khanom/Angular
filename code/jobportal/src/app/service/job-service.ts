import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseUrl: string = "http://localhost:3000/job";

  constructor(private http: HttpClient) { }

 getAllJob(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveJob(job: Job): Observable<any> {

    return this.http.post(this.baseUrl, job);

  } 

   deleteJob(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + "/" + id);

  }

   getJobById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);

  }

    updateJob(id: string, job: Job): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, job);

  }


}
