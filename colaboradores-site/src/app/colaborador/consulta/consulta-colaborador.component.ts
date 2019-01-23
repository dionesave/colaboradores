import { Component, OnInit } from '@angular/core';
 
import {Router, ActivatedRoute} from '@angular/router';
 
import {Response} from '../../services/response';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Colaborador } from 'src/app/services/colaborador';
 
@Component({
    selector: 'app-consulta-colaboradores',
    templateUrl: './consulta.component.html',
    styleUrls:["./consulta.component.css"]
  })
  export class ConsultaColaboradorComponent implements OnInit {
 
    private colaboradores: Colaborador[] = new Array();
    
   
    private titulo:string;
 
    constructor(private route: ActivatedRoute, private colaboradorService: ColaboradorService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
      this.titulo = "Registros Cadastrados";
 
      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.colaboradorService.getColaboradores().subscribe(function(res){return this.colaboradores = res});
    }
 

    /*
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    //excluir(codigo:number, index:number):void {
 
      //if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
       // this.pessoaService.excluirPessoa(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              //let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              //if(res.codigo == 1){
               // alert(res.mensagem);
                //this.pessoas.splice(index,1);
              //}
             // else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                //alert(res.mensagem);
              //}
         // },
         // (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
         //      alert(erro);
         // });        
      //}
 
   // }
 
   // editar(codigo:number):void{
 
    //  this.router.navigate(['/cadastro-pessoa',codigo]);
 
   // }
 
  }