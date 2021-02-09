package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Perfil;
import java.util.List;

/**
 * Persistencia de perfil
 * 
 * @author Filipe Gomes
 */
public class PerfilDao extends GenericDao<Long, Perfil>
{

   /**
    * Cria uma nova instância do tipo PerfilDao.
    * <P>
    */
   public PerfilDao()
   {
      super(Perfil.class);
   }

   /**
    * retorna perfis ativados
    * 
    * @TODO Comentar Método
    * @return
    */
   public List<Perfil> getPerfis()
   {
      return findAllActivated(Boolean.TRUE);
   }

   /**
    * salva perfil
    * 
    * @param p
    * @return
    */
   public Perfil salvarPerfil(final Perfil p)
   {
      return salvar(p);
   }

   /**
    * deletar perfil
    * 
    * @param id
    */
   public void deletarPerfil(final Long id)
   {
      remover(id);
   }

}
