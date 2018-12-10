export class ConfigService{

    private urlService:string;

    constructor(){
        this.urlService = 'localhost:8080/colaborador-service';
    }

    getUrlService():string{
        return this.urlService;
    }
}