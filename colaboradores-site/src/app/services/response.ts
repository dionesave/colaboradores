export class Response{
    
    private codigo:number
    private mensagem:string

    constructor(codigo:number, mensagem:string){
        this.codigo = codigo
        this.mensagem  = mensagem
    }
}