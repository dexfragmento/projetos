package com.acnwebadmin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@Table(name = "EMPRESA", schema = "ACN")
@NamedQuery(name = "Empresa.findAll", query = "SELECT e FROM Empresa e")
public class Empresa {
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
   @Column(name = "CNPJ", nullable = false)
   private String cnpj;

   /**
    * Cadastro Específico do INSS
    */
   @Column(name = "CEI", nullable = false)
   private String cei;

   @Column(name = "NOME", nullable = false)
	private String nome;
	
	@Column(name = "ENDERECO")
	private String endereco;

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

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

   public String getCnpj()
   {
		return cnpj;
	}

   public void setCnpj(String cnpj)
   {
		this.cnpj = cnpj;
	}

   public String getCei()
   {
      return cei;
   }

   public void setCei(String cei)
   {
      this.cei = cei;
   }

}
