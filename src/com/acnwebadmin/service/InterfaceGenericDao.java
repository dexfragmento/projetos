
package com.acnwebadmin.service;

import java.util.List;

/**
 * Contrato para o CRUD pais genérico
 * 
 * @author Filipe Gomes
 */
public interface InterfaceGenericDao<PK, T>
{

   public void remover(final PK p);

   public T salvar(final T t);

   public T atualizar(final T t);

   public T findById(final PK pk);

   public List<T> findAll();

   public List<T> findAllActivated(final Boolean condicao);

}
