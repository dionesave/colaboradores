package br.com.dss.colaboradores.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.dss.colaboradores.model.Colaborador;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {

}
