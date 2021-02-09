package com.acnwebadmin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * 
 * @author Filipe Gomes
 *
 *         Os campos de "50% de FGTS e 1/3 de Férias serão calculados pela
 *         própria aplicação
 *
 */
@Entity
@Table(name = "CONTROLE_IMPOSTO", schema = "ACN")
public class ControleImpostos {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToOne
	@JoinColumn(name = "ID_FUNCIONARIO")
	private Funcionario funcionario;

	@OneToOne
	@JoinColumn(name = "ID_LOCACAO")
	private Locacao locacao;

	@Column(name = "TOTAL_INSS")
	private Double totalInss;

	@Column(name = "TOTAL_FGTS")
	private Double totalFgts;

	@Column(name = "DECIMO_TERCEIRO")
	private Double decimoTerceiro;

	@Column(name = "FERIAS")
	private Double ferias;

	@Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
	private Boolean ativo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	public Locacao getLocacao() {
		return locacao;
	}

	public void setLocacao(Locacao locacao) {
		this.locacao = locacao;
	}

	public Double getTotalInss() {
		return totalInss;
	}

	public void setTotalInss(Double totalInss) {
		this.totalInss = totalInss;
	}

	public Double getTotalFgts() {
		return totalFgts;
	}

	public void setTotalFgts(Double totalFgts) {
		this.totalFgts = totalFgts;
	}

	public Double getDecimoTerceiro() {
		return decimoTerceiro;
	}

	public void setDecimoTerceiro(Double decimoTerceiro) {
		this.decimoTerceiro = decimoTerceiro;
	}

	public Double getFerias() {
		return ferias;
	}

	public void setFerias(Double ferias) {
		this.ferias = ferias;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

}
