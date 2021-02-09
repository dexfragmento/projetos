package com.acnwebadmin.rest;

import com.acnwebadmin.dao.PerfilDao;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST perfis
 * 
 * @author Filipe Gomes
 */
@Path("/perfil")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PerfilRest
{

   private PerfilDao dao;

   /**
    * Cria uma nova instância do tipo PerfilRest.
    * <P>
    */
   public PerfilRest()
   {
      dao = new PerfilDao();
   }

   /**
    * @TODO Comentar Método
    * @return
    */
   @GET
   public Response getPerfis()
   {
      return Response.ok(dao.getPerfis()).build();
   }

}
