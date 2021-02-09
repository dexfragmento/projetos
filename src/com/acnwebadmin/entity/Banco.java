package com.acnwebadmin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@Table(name = "BANCO", schema = "ACN")
public class Banco {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "NOME", nullable = false)
	private String nome;

	@Column(name = "NUM_CONTA", nullable = false)
	private Integer numConta;

	@Column(name = "NUM_AGENCIA", nullable = false)
	private Integer numAgencia;

	@Column(name = "OPERACAO")
	private Integer op;
	
	@Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
	private Boolean ativo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getNumConta() {
		return numConta;
	}

	public void setNumConta(Integer numConta) {
		this.numConta = numConta;
	}

	public Integer getNumAgencia() {
		return numAgencia;
	}

	public void setNumAgencia(Integer numAgencia) {
		this.numAgencia = numAgencia;
	}

	public Integer getOp() {
		return op;
	}

	public void setOp(Integer op) {
		this.op = op;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

}
