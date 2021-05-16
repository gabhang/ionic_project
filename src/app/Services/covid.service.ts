import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  // use api to get covid related data
  GetCovidData():Observable<any> {
    return this.http.get('https://covidapi.info/api/v1/global');
  }
}
