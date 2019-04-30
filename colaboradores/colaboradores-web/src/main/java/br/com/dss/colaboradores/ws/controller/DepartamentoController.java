package br.com.dss.colaboradores.ws.controller;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dss.colaboradores.model.Departamento;
import br.com.dss.colaboradores.ws.service.DepartamentoService;

@RestController
@RequestMapping("/departamento")
public class DepartamentoController {
	
	@Autowired
	DepartamentoService departamentoService;
	
	
	//EndPoints
//	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
//	public @ResponseBody ResponseModel cadastrarColaborador(@RequestBody Colaborador colaborador) {
//		
//		try {
//			colaboradorService.cadastrar(colaborador);
//			return new ResponseModel(1, "Colaborador registrado com sucesso!");
//		}catch (Exception e) {
//			return new ResponseModel(0, e.getMessage());
//		}
//	}

	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Collection<Departamento> getAllDepartamentos() {	
		return departamentoService.buscarTodos();	
	}
	
//	@RequestMapping(method=RequestMethod.DELETE, value="/colaboradores/{id}")
//	public @ResponseBody ResponseModel excluirColaborador(@PathVariable Long id) {
//		
//		Colaborador colaboradorEncontrado = colaboradorService.buscarPorId(id);
//		
//		try{
//			colaboradorService.excluir(colaboradorEncontrado);
//			return new ResponseModel(1, "Colaborador excluído com sucesso!");
//			
//		}catch (Exception e) {
//			return new ResponseModel(0, e.getMessage());
//		}
//	}
	
//	@RequestMapping(method=RequestMethod.PUT, value="/colaboradores")
//	public @ResponseBody ResponseModel alterarColaborador(@RequestBody Colaborador colaborador) {		
//		
//		try {
//			colaboradorService.alterar(colaborador);
//			return new ResponseModel(1, "Colaborador alterado com sucesso!");
//			
//		}catch (Exception e) {
//			return new ResponseModel(0, e.getMessage());
//		}
//			
//	}
}
