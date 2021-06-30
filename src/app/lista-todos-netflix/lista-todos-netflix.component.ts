import { Netflix } from './../models/netflix-models';
import { NetflixDataService } from './../services/netflix-data.service';
import { NetflixService } from './../services/netflix.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-todos-netflix',
  templateUrl: './lista-todos-netflix.component.html',
  styleUrls: ['./lista-todos-netflix.component.scss']
})
export class ListaTodosNetflixComponent implements OnInit, OnDestroy {

  id: number | undefined;
  netflixes: any[] = [];
  buscaNetflixes: any[] = [];
  subscription: Subscription;

  constructor(private service: NetflixService, private router: Router,
      private dataService: NetflixDataService) {
        this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(
      buscaNetflixes => this.buscaNetflixes = buscaNetflixes
    )
    this.netflixes = [];
    this.dataService.changeMessage(this.netflixes);
    this.router.navigateByUrl('lista');
  }

}
