
package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Cargo;
import java.util.List;

/**
 * @author Filipe Gomes
 */
public class CargoDao extends GenericDao<Long, Cargo>
{

   /**
    * Cria uma nova instância do tipo CargoDao.
    * <P>
    */
   public CargoDao()
   {
      super(Cargo.class);
   }

   /**
    * Salva registro
    * 
    * @param cargo
    * @return Cargo
    * @throws SecurityException
    * @throws Exception
    */
   public Cargo salvar(final Cargo cargo)
   {
      return super.salvar(cargo);
   }

   /**
    * Altera status do campo ATIVO
    * 
    * @param cargo
    * @return Cargo
    * @throws SecurityException
    * @throws Exception
    */
   public Cargo alterarAtivacao(final Cargo cargo) throws SecurityException, Exception
   {
      if (cargo.getAtivo())
      {
         cargo.setAtivo(Boolean.FALSE);
      }
      else
      {
         cargo.setAtivo(Boolean.TRUE);
      }
      return super.atualizar(cargo);
   }

   /**
    * Remove o registro
    * 
    * @param id
    */
   public void deletar(final Long id)
   {
      super.remover(id);
   }

   /**
    * Remove o registro
    * 
    * @param id
    * @return
    */
   public List<Cargo> deletarComListaRetornoAtivados(final Long id)
   {
      return removerComListaRetornoStatus(id, Boolean.TRUE);
   }

   /**
    * Retorna todos os registros
    * 
    * @return List<Cargo>
    */
   public List<Cargo> getCargos()
   {
      return super.findAllActivated(Boolean.TRUE);
   }

}
