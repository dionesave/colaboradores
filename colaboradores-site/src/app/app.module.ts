import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaColaboradorComponent } from './colaborador/consulta/consulta-colaborador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaColaboradorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
