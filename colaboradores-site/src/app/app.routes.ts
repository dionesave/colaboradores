import { Routes } from '@angular/router'
import { HomeComponent } from "./home/home.component"
import { ConsultaColaboradorComponent } from './colaborador/consulta/consulta-colaborador.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: '/consulta-colaborador', component: ConsultaColaboradorComponent}
 //   { path: 'restaurants/:id', component: RestaurantDetailComponent},

]

