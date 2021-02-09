
package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Funcionario;
import java.util.List;

/**
 * @author Filipe Gomes
 */
public class FuncionarioDao extends GenericDao<Long, Funcionario>
{

   /**
    * Cria uma nova instância do tipo FuncionarioDao.
    * <P>
    */
   public FuncionarioDao()
   {
      super(Funcionario.class);
   }

   /**
    * (Ver Javadoc da super classe)
    * 
    * @see com.acnwebadmin.dao.GenericDao#salvar(java.lang.Object)
    */
   public Funcionario salvarFuncionario(final Funcionario funcionario)
   {
      return salvar(funcionario);
   }

   /**
    * @TODO Comentar Método
    * @param id
    * @return List<Funcionario>
    */
   public List<Funcionario> deletarFuncionario(final Long id)
   {
      return removerComListaRetorno(id);
   }

   /**
    * @TODO Comentar Método
    * @return List<Funcionario>
    */
   public List<Funcionario> getFuncionarios()
   {
      return findAll();
   }

}
