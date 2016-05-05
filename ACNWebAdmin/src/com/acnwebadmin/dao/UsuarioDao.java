package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Usuario;
import com.acnwebadmin.exceptions.LoginExistenteException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

/**
 * 
 * @author Filipe Gomes
 *
 */
public class UsuarioDao extends GenericDao<Long, Usuario>
{

   /**
    * Cria uma nova instância do tipo UsuarioDao.
    * <P>
    */
   public UsuarioDao()
   {
      super(Usuario.class);
	}

   /**
    * salvar registro
    * 
    * @param login
    * @param senha
    * @throws SecurityException
    * @throws Exception
    */
   public Usuario salvarUsuario(final Usuario usuario) throws LoginExistenteException
   {
      if (getByLogin(usuario.getLogin()) == null)
      {
         return salvar(usuario);
      }
      else
      {
         throw new LoginExistenteException("Login existente.");
      }
	}

   /**
    * @TODO Comentar Método
    * @param usuario
    * @return
    */
   public Usuario atualizarUsuario(final Usuario usuario)
   {
      return atualizar(usuario);
   }
	
   /**
    * retornar todos os registros ativados
    * 
    * @return List<Usuario>
    */
   public List<Usuario> getUsuarios()
   {
      return super.findAll();
	}

   /**
    * retorna se existe login
    * 
    * @param login
    * @return
    */
   private Usuario getByLogin(final String login)
   {
      Usuario retorno = null;
      try
      {
         final EntityManager em = super.em();
         final Query query = em.createNamedQuery("Usuario.FindByLogin");
         query.setParameter("paramLogin", login);
         retorno = (Usuario) query.getSingleResult();
      }
      catch (NoResultException nre)
      {
         return null;
      }
      return retorno;
   }

   public Usuario login(final String login, final String senha) throws Exception
   {
      Usuario retorno = null;
      try
      {
         final EntityManager em = super.em();
         final Query query = em.createNamedQuery("Usuario.Login");
         query.setParameter(Usuario.PARAM_LOGIN, login);
         query.setParameter(Usuario.PARAM_SENHA, senha);
         retorno = (Usuario) query.getSingleResult();
      }
      catch (NoResultException e)
      {
         throw new Exception("Falha ao logar no sistema.");
      }
      return retorno;
   }

}
