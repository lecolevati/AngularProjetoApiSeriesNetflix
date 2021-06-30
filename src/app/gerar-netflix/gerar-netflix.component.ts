import { Netflix } from './../models/netflix-models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetflixService } from '../services/netflix.service';

@Component({
  selector: 'app-gerar-netflix',
  templateUrl: './gerar-netflix.component.html',
  styleUrls: ['./gerar-netflix.component.scss']
})
export class GerarNetflixComponent implements OnInit {

  constructor(private service: NetflixService,
    private router: Router) {

  }

  id: number | undefined;
  title: string | undefined;
  genre: string | undefined;
  subgenre: string | undefined;
  premiereYear: number | undefined;
  imdbRating: number | undefined;

  ngOnInit(): void {
  }

  gerar() {
    const valorNetflix: Netflix = { id: this.id, title: this.title, genre: this.genre, subgenre: this.subgenre, premiereYear: this.premiereYear, imdbRating: this.imdbRating };
    // const n: string = JSON.parse(valorNetflix);
    // console.log('Solicitado novo cadastro')
    // console.table(valorNetflix)

    this.service.adicionar(valorNetflix).subscribe(
      (resultado) => {
        console.log(resultado);
        // this.limparCampos();
        this.router.navigateByUrl('lista-todos');
    },
      (error) => this.router.navigateByUrl('lista-todos')
    );
  }

  limparCampos() {
    this.id = undefined;
    this.title = undefined;
    this.genre = undefined;
    this.subgenre = undefined;
    this.premiereYear = undefined;
    this.imdbRating = undefined;
  }

}
