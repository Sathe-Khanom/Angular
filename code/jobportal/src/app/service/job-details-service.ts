import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDetails } from '../model/jobDetails.model';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {

  private baseUrl: string = 'http://localhost:3000/jobDetails';

  constructor(private http: HttpClient) { }



  getAllJobDetails(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  addJob(job: JobDetails): Observable<any> {
  return this.http.post(`${this.baseUrl}/jobDetails`, job); // assuming backend is JSON-server or similar
}


  deleteJobDetails(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + "/" + id);

  }

  getJobDetailsById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);

  }

  updateJobDetails(id: string, jobdetails: JobDetails): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, jobdetails);

  }

}
