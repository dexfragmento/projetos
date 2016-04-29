package com.acnwebadmin.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@Table(name = "FUNCIONARIO", schema = "ACN")
@NamedQuery(name = "Funcionario.findAll", query = "SELECT f FROM Funcionario f")
public class Funcionario {
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "NOME")
	private String nome;

	@Column(name = "EMAIL")
	private String email;

	@Column(name = "ENDERECO")
	private String endereco;

	@Column(name = "RG")
	private Long rg;

	@Column(name = "CPF")
   private String cpf;

	@Column(name = "PIS")
	private Long pis;

	@Column(name = "TITULO_ELEITOR")
	private Long tituloEleitor;

	@Column(name = "TELEFONE")
	private Long telefone;

	@Column(name = "SALARIO")
	private Double salario;

	@OneToOne
	@JoinColumn(name = "ID_CARGO", nullable = false)
	private Cargo cargo;

	@OneToOne
	@JoinColumn(name = "ID_LOCACAO", nullable = false)
	private Locacao locacao;

	@OneToOne
	@JoinColumn(name = "ID_BANCO")
	private Banco banco;

	@Column(name = "DT_ADMISSAO")
	@Temporal(TemporalType.DATE)
	private Date dataAdmissao;

	@Column(name = "DT_DEMISSAO")
	@Temporal(TemporalType.DATE)
	private Date dataDemissao;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Long getRg() {
		return rg;
	}

	public void setRg(Long rg) {
		this.rg = rg;
	}

   public String getCpf()
   {
		return cpf;
	}

   public void setCpf(String cpf)
   {
		this.cpf = cpf;
	}

	public Long getPis() {
		return pis;
	}

	public void setPis(Long pis) {
		this.pis = pis;
	}

	public Long getTituloEleitor() {
		return tituloEleitor;
	}

	public void setTituloEleitor(Long tituloEleitor) {
		this.tituloEleitor = tituloEleitor;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Locacao getLocacao() {
		return locacao;
	}

	public void setLocacao(Locacao locacao) {
		this.locacao = locacao;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public Banco getBanco() {
		return banco;
	}

	public void setBanco(Banco banco) {
		this.banco = banco;
	}

	public Date getDataAdmissao() {
		return dataAdmissao;
	}

	public void setDataAdmissao(Date dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}

	public Date getDataDemissao() {
		return dataDemissao;
	}

	public void setDataDemissao(Date dataDemissao) {
		this.dataDemissao = dataDemissao;
	}

}
