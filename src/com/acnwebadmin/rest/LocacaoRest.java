package com.acnwebadmin.rest;

import com.acnwebadmin.dao.LocacaoDao;
import com.acnwebadmin.entity.Locacao;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Path("/locacao")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LocacaoRest {

   private LocacaoDao dao;

   /**
    * Cria uma nova instância do tipo LocacaoRest.
    * <P>
    */
   public LocacaoRest()
   {
      dao = new LocacaoDao();
   }

   /**
    * @TODO Comentar Método
    * @return
    * @throws SecurityException
    * @throws Exception
    */
	@GET
	public List<Locacao> getLocacoes() throws SecurityException, Exception {
      return dao.getLocacoes();
	}

   /**
    * @TODO Comentar Método
    * @param locacao
    * @return
    */
   @POST
	public Locacao salvar(Locacao locacao){
      return dao.salvarLocacao(locacao);
	}

   /**
    * @TODO Comentar Método
    * @param id
    * @return
    */
   @DELETE
   @Path("/{id}")
   public List<Locacao> deletar(@PathParam("id") final Long id)
   {
      return dao.deletarLocacaoComRetornoAtivados(id);
   }

}
