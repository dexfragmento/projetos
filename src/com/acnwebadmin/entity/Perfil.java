
package com.acnwebadmin.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Filipe Gomes
 */
@Entity
@Table(name = "PERFIL", schema = "ACN")
public class Perfil implements Serializable
{

   /** @TODO Comentar atributo */
   private static final long serialVersionUID = -5555858035326935758L;

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;

   @Column(name = "NOME")
   private String nome;

   @Column(name = "DESCRICAO")
   private String descricao;

   @Column(name = "ATIVO", nullable = false, columnDefinition = "Boolean default true")
   private Boolean ativo;

   public Long getId()
   {
      return id;
   }

   public void setId(Long id)
   {
      this.id = id;
   }

   public String getNome()
   {
      return nome;
   }

   public void setNome(String nome)
   {
      this.nome = nome;
   }

   public String getDescricao()
   {
      return descricao;
   }

   public void setDescricao(String descricao)
   {
      this.descricao = descricao;
   }

   public Boolean getAtivo()
   {
      return ativo;
   }

   public void setAtivo(Boolean ativo)
   {
      this.ativo = ativo;
   }

}
