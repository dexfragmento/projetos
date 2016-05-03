package com.acnwebadmin.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Entity
@Table(name = "USUARIO", schema = "ACN")
@NamedQueries({
   @NamedQuery(name = "Usuario.FindByLogin", query = "select Object(u) from Usuario u where u.login = :paramLogin"),
   @NamedQuery(name = "Usuario.Login", query = "select object(u) from Usuario u where u.login = :paramLogin and u.senha = :paramSenha")
})
public class Usuario implements Serializable
{

   public static final String PARAM_LOGIN = "paramLogin";
   public static final String PARAM_SENHA = "paramSenha";

   /** serialVersionUID */
   private static final long serialVersionUID = -4718079626730911424L;

   @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

   @Column(name = "NOME")
   private String nome;

   @Column(name = "EMAIL")
   private String email;

   @Column(name = "LOGIN", length = 20, nullable = false, unique = true)
	private String login;

   @Column(name = "SENHA", nullable = false)
	private String senha;

	@Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
	private Boolean ativo;

   @OneToOne
   @JoinColumn(name = "ID_PERFIL", nullable = false)
   private Perfil perfil;

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

   public Perfil getPerfil()
   {
      return perfil;
	}

   public void setPerfil(Perfil perfil)
   {
      this.perfil = perfil;
	}

   public String getNome()
   {
      return nome;
   }

   public void setNome(String nome)
   {
      this.nome = nome;
   }

   public String getEmail()
   {
      return email;
   }

   public void setEmail(String email)
   {
      this.email = email;
   }

}
