import { Component } from "@angular/core";



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export  class HomePageComponent{
    private mensagem:string = "Página Inicial.";

    constructor() { }

    ngOnInit() { }
}