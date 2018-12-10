import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Colaborador} from '../services/colaborador';
import { ConfigService } from './config.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';





@Inject
export class ColaboradorService{

    private baseUrlService:string = '';
    private headers:HttpHeaders;


    constructor(private http: HttpClient,
                private configService: ConfigService){

        this.baseUrlService = configService.getUrlService() +'/colaboradores/';

        this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });
                     
    }


    getColaboradores(){
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    addColaborador(colaborador : Colaborador){
        return this.http.post(this.baseUrlService, JSON.stringify(colaborador), {headers : this.headers})
    }

    excluirColaborador(id : number){
        return this.http.delete(this.baseUrlService + id).map(function(res){res.json()});
    }

    atualizarColaborador(colaborador : Colaborador){
        return this.http.put(this.baseUrlService, JSON.stringify(colaborador), {headers : this.headers});
    } 

}