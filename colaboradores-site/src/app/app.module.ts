import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { ColaboradorService } from './services/colaborador.service';
import { ConsultaComponent } from './colaborador/consulta/consulta.component';
import { CadastroComponent } from './colaborador/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService, ColaboradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
