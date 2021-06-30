import { GerarNetflixComponent } from './gerar-netflix/gerar-netflix.component';
import { ListaTodosNetflixComponent } from './lista-todos-netflix/lista-todos-netflix.component';
import { BuscaNetflixComponent } from './busca-netflix/busca-netflix.component';
import { ListaNetflixComponent } from './lista-netflix/lista-netflix.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'busca', pathMatch: 'full' },
  { path: 'lista', component: ListaNetflixComponent },
  { path: 'busca', component: BuscaNetflixComponent},
  { path: 'lista-todos', component: ListaTodosNetflixComponent},
  { path: 'gerar', component: GerarNetflixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
