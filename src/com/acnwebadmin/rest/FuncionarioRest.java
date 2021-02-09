
package com.acnwebadmin.rest;

import com.acnwebadmin.dao.FuncionarioDao;
import com.acnwebadmin.entity.Funcionario;
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
@Path("/funcionario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class FuncionarioRest
{

   private FuncionarioDao dao;

   public FuncionarioRest()
   {
      dao = new FuncionarioDao();
   }

   /**
    * Retorno de todos os funcionários
    * 
    * @return
    * @throws SecurityException
    * @throws Exception
    */
   @GET
   public List<Funcionario> getFuncionarios() throws SecurityException, Exception
   {
      return dao.getFuncionarios();
   }

   /**
    * @TODO Comentar Método
    * @param funcionario
    * @return
    */
   @POST
   public Response salvar(final Funcionario funcionario)
   {
      return Response.ok(dao.salvar(funcionario)).build();
   }

   /**
    * @TODO Comentar Método
    * @param id
    * @return
    */
   @DELETE
   @Path("/{id}")
   public Response deletar(@PathParam("id") final Long id)
   {
      return Response.ok(dao.deletarFuncionario(id)).build();
   }
}
