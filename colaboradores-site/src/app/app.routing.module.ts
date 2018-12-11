import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from "./colaborador/consulta/consulta.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component:ConsultaComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{}