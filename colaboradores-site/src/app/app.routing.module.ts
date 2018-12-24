import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from "./colaborador/consulta/consulta.component";

const APP_ROUTES: Routes = [
    {path: 'colaboradores', children: [
        { path: 'lista'   , component: ConsultaComponent, data: { title: 'Lista de Colaboradores' } },
        //{ path: 'cadastro', component: ProjetoCadastroComponent, data: { title: 'Novo caso Miner' } },
        { path: '', redirectTo: 'lista', pathMatch: 'full'},
       /// { path: '**', redirectTo: 'lista', pathMatch: 'full'}
    ]}
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{}