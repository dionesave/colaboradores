import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './colaborador/consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
