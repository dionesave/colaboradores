import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './colaborador/consulta/consulta.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'lista',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
