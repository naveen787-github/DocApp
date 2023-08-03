import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctors } from '../models/doctors.model';

const baseurl = 'https://qudv60l68f.execute-api.ap-south-1.amazonaws.com/dev/createitem';

  
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
   
  constructor(private httpClient: HttpClient) { }
  

  create(data:Doctors): Observable<Doctors>{
    var url = baseurl
    return this.httpClient.post<Doctors>(url,data)
  
    }
  
}