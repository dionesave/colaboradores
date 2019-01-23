import { HomePageComponent } from "./home/home-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{}