import { Netflix } from './../models/netflix-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {

  private listaNetflix: any[];
  private url = 'http://localhost:8080/restapisimu/api/netflix';

  netflixesBusca: any;

  constructor(private httpClient: HttpClient) {
    this.listaNetflix = [];
  }

  get netflixes() {
    return this.listaNetflix;
  }

  get getNetflixesBusca() {
    return this.netflixesBusca
  }

  allSeries(): Observable<Netflix[]> {
    return this.httpClient.get<Netflix[]>(this.url);
  }

  serie(id: any): Observable<Netflix[]> {
    return this.httpClient.get<Netflix[]>(this.url+"/"+id);
  }

  adicionar(n: Netflix): Observable<Netflix> {
    return this.httpClient.post<Netflix>(this.url, n);
  }
}
