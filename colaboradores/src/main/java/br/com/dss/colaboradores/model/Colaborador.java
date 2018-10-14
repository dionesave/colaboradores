package br.com.dss.colaboradores.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "COLABORADOR")
public class Colaborador implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID_COLABORADOR")
	private Long idColaborador;
	
	@Column(name="NOME")
	private String nome;
	
	@Column(name="CARGO")
	private String cargo;
	
	@Column(name="DEPARTAMENTO")
	private String departamento;
	
	@Column(name="LOCALIDADE")
	private String localidade;
	
	@Column(name="DESCRICAOFUNCAO")
	private String descricaoFuncao;
	
	@Lob
	@Column(name="FOTO")
	@Basic(fetch = FetchType.LAZY)
	private byte[] fotoPerfil;
	
//	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
//	@JoinColumn(name = "ID_COLABORADOR")
//	private List<Contato> listaContatos;
//	
//	@ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
//	@JoinTable(name = "COLABORADOR_COMPETENCIA")
//	private List<Competencia> listaCompetencia;

	
	public Long getIdColaborador() {
		return idColaborador;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getDepartamento() {
		return departamento;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getDescricaoFuncao() {
		return descricaoFuncao;
	}

	public void setDescricaoFuncao(String descricaoFuncao) {
		this.descricaoFuncao = descricaoFuncao;
	}

	public byte[] getFotoPerfil() {
		return fotoPerfil;
	}

	public void setFotoPerfil(byte[] fotoPerfil) {
		this.fotoPerfil = fotoPerfil;
	}

//	public List<Contato> getListaContatos() {
//		return listaContatos;
//	}
//
//	public void setListaContatos(List<Contato> listaContatos) {
//		this.listaContatos = listaContatos;
//	}
//
//	public List<Competencia> getListaCompetencia() {
//		return listaCompetencia;
//	}
//
//	public void setListaCompetencia(List<Competencia> listaCompetencia) {
//		this.listaCompetencia = listaCompetencia;
//	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idColaborador == null) ? 0 : idColaborador.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Colaborador other = (Colaborador) obj;
		if (idColaborador == null) {
			if (other.idColaborador != null)
				return false;
		} else if (!idColaborador.equals(other.idColaborador))
			return false;
		return true;
	}
	
}
