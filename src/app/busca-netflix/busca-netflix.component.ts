import { NetflixDataService } from './../services/netflix-data.service';
import { Netflix } from './../models/netflix-models';
import { NetflixService } from './../services/netflix.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busca-netflix',
  templateUrl: './busca-netflix.component.html',
  styleUrls: ['./busca-netflix.component.scss'],
  template: '{{ message }}'
})
export class BuscaNetflixComponent implements OnInit, OnDestroy {

  id: number | undefined;
  netflixes: any[] = [];
  buscaNetflixes: Netflix[] = [];
  subscription: Subscription;
  n: Netflix | undefined;

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
  }

  buscar() {
    this.service.serie(this.id).subscribe((netflixes: Netflix[]) => {
      this.netflixes = netflixes;
      this.buscaNetflixes = this.netflixes;
      this.dataService.changeMessage(this.netflixes);
      this.router.navigateByUrl('lista');
    });
  }

}
