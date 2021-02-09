
package com.acnwebadmin.rest;

import com.acnwebadmin.dao.CargoDao;
import com.acnwebadmin.entity.Cargo;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author Filipe Gomes
 */
@Path("/cargo")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CargoRest
{

   private CargoDao dao;

   /**
    * Cria uma nova instância do tipo CargoRest.
    * <P>
    */
   public CargoRest()
   {
      dao = new CargoDao();
   }

   /**
    * Retorna todos os cargos (ativos)
    * 
    * @return List<Cargo>
    * @throws SecurityException
    * @throws Exception
    */
   @GET
   public List<Cargo> getCargos() throws SecurityException, Exception
   {
      return dao.getCargos();
   }

   /**
    * Salva cargo
    * 
    * @param cargo
    * @return Response
    * @throws SecurityException
    * @throws Exception
    */
   @POST
   public Response salvar(Cargo cargo) throws SecurityException, Exception
   {
      cargo = dao.salvar(cargo);
      return Response.status(201).entity(cargo).build();
   }

   /**
    * Deleta cargo do banco
    * 
    * @param id
    * @return List<Cargo>
    * @throws SecurityException
    * @throws Exception
    */
   @DELETE
   @Path("/{id}")
   public List<Cargo> deletar(@PathParam("id") Long id) throws SecurityException, Exception
   {
      return dao.deletarComListaRetornoAtivados(id);
   }

}
