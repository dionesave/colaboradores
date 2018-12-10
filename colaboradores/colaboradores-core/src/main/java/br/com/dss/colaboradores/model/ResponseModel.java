package br.com.dss.colaboradores.model;

public class ResponseModel {
	
	private int codigo;
	private String mensagem;
	
	public ResponseModel(int codigo, String mensagem) {
		this.codigo = codigo;
		this.mensagem = mensagem;
	}
	
	
	/**
	 * @return the codigo
	 */
	public int getCodigo() {
		return codigo;
	}
	/**
	 * @param codigo the codigo to set
	 */
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	/**
	 * @return the mensagem
	 */
	public String getMensagem() {
		return mensagem;
	}
	/**
	 * @param mensagem the mensagem to set
	 */
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	
	
}
