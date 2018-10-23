package br.com.dss.colaboradores.ws.controller;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dss.colaboradores.model.Colaborador;
import br.com.dss.colaboradores.ws.service.ColaboradorService;

@RestController
public class ColaboradorController {
	
	@Autowired
	ColaboradorService colaboradorService;
	
	
	//EndPoints
	@RequestMapping(method=RequestMethod.POST, value="/colaboradores", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Colaborador> cadastrarColaborador(@RequestBody Colaborador colaborador) {
		
		Colaborador colaboradorCadastrado = colaboradorService.cadastrar(colaborador);
		
		return new ResponseEntity<Colaborador>(colaboradorCadastrado, HttpStatus.CREATED);
	}

	@RequestMapping(method=RequestMethod.GET, value="/colaboradores", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Colaborador>> getAllColaboradores() {
		Collection<Colaborador> colaboradoresList = colaboradorService.buscarTodos();
		return new ResponseEntity<Collection<Colaborador>>(colaboradoresList, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/colaboradores/{id}")
	public ResponseEntity<Colaborador> excluirColaborador(@PathVariable Long id) {
		
		Colaborador colaboradorEncontrado = colaboradorService.buscarPorId(id);
		
		if(colaboradorEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			colaboradorService.excluir(colaboradorEncontrado);
			return new ResponseEntity<Colaborador>(HttpStatus.OK);
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/colaboradores")
	public ResponseEntity<Colaborador> alterarColaborador(@RequestBody Colaborador colaborador) {		
		
		if(colaborador == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			colaboradorService.alterar(colaborador);
			return new ResponseEntity<>(colaborador, HttpStatus.OK);
		}
	}
}
