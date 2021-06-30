import { Subscription } from 'rxjs';
import { NetflixDataService } from './../services/netflix-data.service';
import { Netflix } from './../models/netflix-models';
import { NetflixService } from './../services/netflix.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-netflix',
  templateUrl: './lista-netflix.component.html',
  styleUrls: ['./lista-netflix.component.scss']
})
export class ListaNetflixComponent implements OnInit, OnDestroy {

  netflixes: any[];
  buscaNetflixes: any[];
  id: number | undefined;
  subscription: Subscription;

  constructor(private service: NetflixService, private dataService: NetflixDataService) {
    this.netflixes = [];
    this.buscaNetflixes = [];
    this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    // console.log(this.service.netflixesBusca);
    // this.buscaNetflixes = this.service.netflixesBusca;

    this.subscription = this.dataService.currentMessage.subscribe(
      buscaNetflixes => this.buscaNetflixes = buscaNetflixes
    );

    if (this.buscaNetflixes.length == 0) {
      this.getAllSeries();
      // console.log("Entrou no vazio");
    } else {
        // console.log("Entrou no buscaNetflixes true");
        // console.log(this.buscaNetflixes);
        const s: string = JSON.stringify(this.buscaNetflixes);
        const n: Netflix = JSON.parse(s);
        // console.log(n.id);
        if (typeof n.id != undefined && n.id == 0) {
          this.netflixes = [];
        } else {
          this.netflixes[0] = this.buscaNetflixes;
        }
    }
  }

  private getAllSeries() {
    this.service.allSeries().subscribe((netflixes: Netflix[]) => {
      // console.table(netflixes);
      this.netflixes = netflixes;
    });
  }

}
