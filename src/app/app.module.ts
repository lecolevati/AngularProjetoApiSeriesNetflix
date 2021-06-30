import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNetflixComponent } from './lista-netflix/lista-netflix.component';
import { GerarNetflixComponent } from './gerar-netflix/gerar-netflix.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscaNetflixComponent } from './busca-netflix/busca-netflix.component';
import { ListaTodosNetflixComponent } from './lista-todos-netflix/lista-todos-netflix.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNetflixComponent,
    GerarNetflixComponent,
    BuscaNetflixComponent,
    ListaTodosNetflixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
