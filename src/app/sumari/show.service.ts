import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowText } from './show.model';

@Injectable({
  providedIn: 'root'
})

export class ShowService {

  private readonly APIUrl = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getTitles(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl.concat('sumari'));
  }

  url = 'https://back-app-pln.herokuapp.com/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  
  gettexto() : Observable<any> {
    return this.http.get(this.url + 'texto/',
    {headers: this.httpHeaders });
  }

  gettexto1(id:any) : Observable<any> {
    return this.http.get(this.url + 'texto/' + id + '/',
    {headers: this.httpHeaders });
  }

  salvarlink(texto:any){
    return this.http.post(this.url + 'texto/', texto,
    {headers: this.httpHeaders });
  }
}
