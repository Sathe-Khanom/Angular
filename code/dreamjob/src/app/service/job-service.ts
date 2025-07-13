import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
 baseUrl: string = "http://localhost:4200/job";

  constructor(private http:HttpClient) { }


  getAllJob():Observable<any>{

    return this.http.get(this.baseUrl);

  }



}
