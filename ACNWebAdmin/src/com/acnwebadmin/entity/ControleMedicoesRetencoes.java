package com.acnwebadmin.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "CONTROLE_MEDICOES_RETENCOES", schema = "ACN")
public class ControleMedicoesRetencoes {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToOne
	@JoinColumn(name = "ID_EMPRESA", nullable = false)
	private Empresa empresa;

	@Column(name = "DT_INICIAL")
	@Temporal(TemporalType.DATE)
	private Date dataInicial;

	@Column(name = "DT_FINAL")
	@Temporal(TemporalType.DATE)
	private Date dataFinal;

	@Column(name = "TOTAL_MEDIDO_PESO")
	private Long totalMedidoPeso;

	@Column(name = "TOTAL_MEDIDO_REAL")
	private Double totalMedidoReal;

	@Column(name = "DESCONTO_INSS")
	private Double descontoInss;

	@Column(name = "DESCONTO_ISS")
	private Double descontoIss;

	@Column(name = "RETENCAO_TECNICA")
	private Double retencaoTecnica;

	@Column(name = "LIQUIDO_RECEBIDO")
	private Double liquidoRecebido;

	@Column(name = "RETENCAO_ACUMULADA")
	private Double retencaoAcumulada;

	@Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
	private Boolean ativo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public Date getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(Date dataInicial) {
		this.dataInicial = dataInicial;
	}

	public Date getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(Date dataFinal) {
		this.dataFinal = dataFinal;
	}

	public Long getTotalMedidoPeso() {
		return totalMedidoPeso;
	}

	public void setTotalMedidoPeso(Long totalMedidoPeso) {
		this.totalMedidoPeso = totalMedidoPeso;
	}

	public Double getTotalMedidoReal() {
		return totalMedidoReal;
	}

	public void setTotalMedidoReal(Double totalMedidoReal) {
		this.totalMedidoReal = totalMedidoReal;
	}

	public Double getDescontoInss() {
		return descontoInss;
	}

	public void setDescontoInss(Double descontoInss) {
		this.descontoInss = descontoInss;
	}

	public Double getDescontoIss() {
		return descontoIss;
	}

	public void setDescontoIss(Double descontoIss) {
		this.descontoIss = descontoIss;
	}

	public Double getRetencaoTecnica() {
		return retencaoTecnica;
	}

	public void setRetencaoTecnica(Double retencaoTecnica) {
		this.retencaoTecnica = retencaoTecnica;
	}

	public Double getLiquidoRecebido() {
		return liquidoRecebido;
	}

	public void setLiquidoRecebido(Double liquidoRecebido) {
		this.liquidoRecebido = liquidoRecebido;
	}

	public Double getRetencaoAcumulada() {
		return retencaoAcumulada;
	}

	public void setRetencaoAcumulada(Double retencaoAcumulada) {
		this.retencaoAcumulada = retencaoAcumulada;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

}
