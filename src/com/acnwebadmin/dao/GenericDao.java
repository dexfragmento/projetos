
package com.acnwebadmin.dao;

import com.acnwebadmin.service.InterfaceGenericDao;
import java.io.Serializable;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;

/**
 * Persistência genérica de CRUD
 * 
 * @author Filipe Gomes
 */
public abstract class GenericDao<PK extends Serializable, T> extends DAO implements InterfaceGenericDao<PK, T>
{

   private Class<T> clazz;
   private EntityManager em;

   /**
    * Cria uma nova instância do tipo GenericoDao.
    * <P>
    * 
    * @param clazz
    */
   public GenericDao(final Class<T> clazz)
   {
      this.clazz = clazz;
      this.em = getEm();
   }

   /**
    * Remove o registro
    * 
    * @param p
    */
   public void remover(final PK p)
   {
      try
      {
         em.getTransaction().begin();
         final T t = findById(p);
         em.remove(t);
         em.getTransaction().commit();
         em.close();
      }
      catch (Exception e)
      {
         e.printStackTrace();
         em.getTransaction().rollback();
      }
   }

   /**
    * Remove retornando lista com status ativados ou inativados
    * 
    * @param p
    * @param status
    * @return
    */
   public List<T> removerComListaRetornoStatus(final PK p, final Boolean status)
   {
      List<T> retorno = null;
      try
      {
         em.getTransaction().begin();
         final T t = findById(p);
         em.remove(t);
         retorno = findAllActivated(status);
         em.getTransaction().commit();
         em.close();
      }
      catch (Exception e)
      {
         e.printStackTrace();
         em.getTransaction().rollback();
      }
      return retorno;
   }

   /**
    * Remove o registro com retorno de lista
    */
   public List<T> removerComListaRetorno(final PK p)
   {
      List<T> retorno = null;
      try
      {
         em.getTransaction().begin();
         final T t = findById(p);
         em.remove(t);
         retorno = findAll();
         em.getTransaction().commit();
         em.close();
      }
      catch (Exception e)
      {
         e.printStackTrace();
         em.getTransaction().rollback();
      }
      return retorno;
   }

   /**
    * Salva registro
    * 
    * @param t
    * @return
    */
   public T salvar(final T t)
   {
      try
      {
         em.getTransaction().begin();
         em.persist(t);
         em.getTransaction().commit();
         em.close();
      }
      catch (Exception e)
      {
         e.printStackTrace();
         em.getTransaction().rollback();
      }

      return t;
   }

   /**
    * Atualiza registro
    * 
    * @param t
    * @return
    */
   public T atualizar(final T t)
   {
      try
      {
         em.getTransaction().begin();
         em.merge(t);
         em.getTransaction().commit();
         em.close();
      }
      catch (Exception e)
      {
         e.printStackTrace();
         em.getTransaction().rollback();
      }

      return t;
   }

   /**
    * Encontra por ID
    * 
    * @param p
    * @return
    */
   public T findById(final PK p)
   {
      return em.find(clazz, p);
   }

   /**
    * Retorna todos os registros
    * 
    * @return
    */
   @SuppressWarnings("unchecked")
   public List<T> findAll()
   {
      return em.createQuery("Select t from " + clazz.getSimpleName() + " t").getResultList();
   }

   /**
    * Retorna todos os registros
    * 
    * @return
    */
   @SuppressWarnings("unchecked")
   public List<T> findAllActivated(Boolean condicao)
   {
      condicao = (condicao == null ? Boolean.TRUE : condicao);
      return em.createQuery("Select t from " + clazz.getSimpleName() + " t where t.ativo = " + condicao).getResultList();
   }

   /**
    * retorna registro por entitdade
    * 
    * @param t
    * @return
    */
   public T findByEntity(final T t)
   {
      return em.find(clazz, t);
   }

   /**
    * retorna registro por atributos
    * 
    * @param attrs
    * @param t
    * @return
    */
   public T getByAttr(final Map<String, Object> attrs, final T t)
   {
      return em.find(clazz, t, attrs);
   }

   /**
    * retorna EntityManager
    * 
    * @return EntityManager
    */
   public EntityManager em()
   {
      return this.em;
   }

}
