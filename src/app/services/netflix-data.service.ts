import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetflixDataService {

  private buscaNetflix: any[] = [];
  private messageSource = new BehaviorSubject(this.buscaNetflix);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(netflix: any) {
    this.messageSource.next(netflix);
  }
}
