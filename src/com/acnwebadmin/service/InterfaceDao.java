
package com.acnwebadmin.service;

import javax.persistence.EntityManager;

/**
 * contrato com o DAO que inicia a conexão com o banco
 * 
 * @author Filipe Gomes
 */
public interface InterfaceDao
{

   public EntityManager getEm();
}
