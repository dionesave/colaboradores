package br.com.dss.colaboradores.ws.controller;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.dss.colaboradores.model.Colaborador;
import br.com.dss.colaboradores.model.ResponseModel;
import br.com.dss.colaboradores.ws.service.ColaboradorService;

@RestController
@RequestMapping("/colaborador-service")
public class ColaboradorController {
	
	@Autowired
	ColaboradorService colaboradorService;
	
	
	//EndPoints
	@RequestMapping(method=RequestMethod.POST, value="/colaboradores", consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseModel cadastrarColaborador(@RequestBody Colaborador colaborador) {
		
		try {
			colaboradorService.cadastrar(colaborador);
			return new ResponseModel(1, "Colaborador registrado com sucesso!");
		}catch (Exception e) {
			return new ResponseModel(0, e.getMessage());
		}
	}

	@RequestMapping(method=RequestMethod.GET, value="/colaboradores", produces=MediaType.APPLICATION_JSON_VALUE)
	public Collection<Colaborador> getAllColaboradores() {	
		return colaboradorService.buscarTodos();	
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/colaboradores/{id}")
	public @ResponseBody ResponseModel excluirColaborador(@PathVariable Long id) {
		
		Colaborador colaboradorEncontrado = colaboradorService.buscarPorId(id);
		
		try{
			colaboradorService.excluir(colaboradorEncontrado);
			return new ResponseModel(1, "Colaborador excluído com sucesso!");
			
		}catch (Exception e) {
			return new ResponseModel(0, e.getMessage());
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/colaboradores")
	public @ResponseBody ResponseModel alterarColaborador(@RequestBody Colaborador colaborador) {		
		
		try {
			colaboradorService.alterar(colaborador);
			return new ResponseModel(1, "Colaborador alterado com sucesso!");
			
		}catch (Exception e) {
			return new ResponseModel(0, e.getMessage());
		}
			
	}
}
