package br.com.dss.colaboradores.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dss.colaboradores.model.Colaborador;
import br.com.dss.colaboradores.ws.repository.ColaboradorRepository;

@Service
public class ColaboradorService {
	
	@Autowired
	ColaboradorRepository colaboradorRepository;
	
	
	//Negocial
	public Colaborador cadastrar(Colaborador colaborador) {
		return colaboradorRepository.save(colaborador);
	}
	
	public Collection<Colaborador> buscarTodos(){
		return colaboradorRepository.findAll();
	}
	
	public Colaborador buscarPorId(Long id) {
		return colaboradorRepository.getOne(id);
	}
	
	
	public void excluir(Colaborador colaborador) {
		colaboradorRepository.deleteById(colaborador.getIdColaborador());
	}
	
	public Colaborador alterar(Colaborador colaborador) {
		return colaboradorRepository.save(colaborador);
	}
}
