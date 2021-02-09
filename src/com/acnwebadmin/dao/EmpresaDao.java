
package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Empresa;
import java.util.List;

/**
 * @author Filipe Gomes
 */
public class EmpresaDao extends GenericDao<Long, Empresa>
{

   /**
    * Cria uma nova instância do tipo EmpresaDao.
    * <P>
    */
   public EmpresaDao()
   {
      super(Empresa.class);
   }

   /**
    * (Ver Javadoc da super classe)
    * 
    * @see com.acnwebadmin.dao.GenericDao#salvar(java.lang.Object)
    */
   public Empresa salvarEmpresa(final Empresa empresa)
   {
      return salvar(empresa);
   }

   /**
    * altera status de ativacao
    * 
    * @param empresa
    * @return
    * @throws SecurityException
    * @throws Exception
    */
   public Empresa alterarAtivacao(final Empresa empresa) throws SecurityException, Exception
   {
      if (empresa.getAtivo())
      {
         empresa.setAtivo(Boolean.FALSE);
      }
      else
      {
         empresa.setAtivo(Boolean.TRUE);
      }
      return atualizar(empresa);
   }

   /**
    * Remove o registro
    * 
    * @param id
    */
   public void deletarEmpresa(final Long id)
   {
      remover(id);
   }

   /**
    * Remove o registro
    * 
    * @param id
    * @return
    */
   public List<Empresa> deletarEmpresaComListaRetornoAtivados(final Long id)
   {
      return removerComListaRetornoStatus(id, Boolean.TRUE);
   }

   /**
    * Retorna todos os registros
    * 
    * @return List<Empresa>
    */
   public List<Empresa> getEmpresas()
   {
      return findAllActivated(Boolean.TRUE);
   }

}
