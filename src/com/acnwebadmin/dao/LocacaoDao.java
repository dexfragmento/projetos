
package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Locacao;
import java.util.List;

/**
 * Persistence de Locacao
 * 
 * @author Filipe Gomes
 *         <DD>
 */
public class LocacaoDao extends GenericDao<Long, Locacao>
{

   /**
    * Cria uma nova instância do tipo LocacaoDao.
    * <P>
    */
   public LocacaoDao()
   {
      super(Locacao.class);
   }

   /**
    * retorna registros
    * 
    * @return List<Locacao>
    */
   public List<Locacao> getLocacoes()
   {
      return findAllActivated(Boolean.TRUE);
   }

   /**
    * @TODO Comentar Método
    * @param locacao
    * @return
    */
   public Locacao salvarLocacao(final Locacao locacao)
   {
      return salvar(locacao);
   }

   /**
    * @TODO Comentar Método
    * @param id
    * @return
    */
   public List<Locacao> deletarLocacaoComRetornoAtivados(final Long id)
   {
      return removerComListaRetorno(id);
   }

}
