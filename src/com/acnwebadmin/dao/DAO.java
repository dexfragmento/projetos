
package com.acnwebadmin.dao;

import com.acnwebadmin.service.InterfaceDao;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * @author Filipe Gomes
 */
public class DAO implements InterfaceDao
{

   private EntityManagerFactory emf;

   /**
    * Cria uma nova instância do tipo DAO.
    * <P>
    */
   public DAO()
   {
      this.emf = Persistence.createEntityManagerFactory("ACN_BD");
   }

   /**
    * Disponibilização do EntityManager
    * 
    * @return
    */
   public EntityManager getEm()
   {
      return emf.createEntityManager();
   }

}
