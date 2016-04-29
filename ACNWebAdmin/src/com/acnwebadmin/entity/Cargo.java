package com.acnwebadmin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@XmlRootElement
@Table(name = "CARGO", schema = "ACN")
@NamedQueries({
	@NamedQuery(name = "Cargo.findAll", query = "select c from Cargo c"),
   @NamedQuery(name = "Cargo.findAllActivated", query = "select c from Cargo c where c.ativo = :paramAtivo")
})
public class Cargo {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "NOME", nullable = false)
	private String nome;

	@Column(name = "DESCRICAO", nullable = false)
	private String descricao;

	@Column(name = "SALARIO_FIXO")
	private Double salarioFixo;

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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public Double getSalarioFixo() {
		return salarioFixo;
	}

	public void setSalarioFixo(Double salarioFixo) {
		this.salarioFixo = salarioFixo;
	}

}
