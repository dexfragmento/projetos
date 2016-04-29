package com.acnwebadmin.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@Table(name = "USUARIO", schema = "ACN")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "login", length = 20, nullable = false, unique = true)
	private String login;

	@Column(name = "senha", length = 20, nullable = false)
	private String senha;

	@Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
	private Boolean ativo;

	@ManyToMany
	@JoinColumn(name = "ID_PERFIL", nullable = false)
	private List<Perfil> perfis;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public List<Perfil> getPerfis() {
		return perfis;
	}

	public void setPerfis(List<Perfil> perfis) {
		this.perfis = perfis;
	}

}
