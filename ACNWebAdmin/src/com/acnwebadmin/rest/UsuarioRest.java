package com.acnwebadmin.rest;

import com.acnwebadmin.dao.UsuarioDao;
import com.acnwebadmin.entity.Usuario;
import com.acnwebadmin.exceptions.LoginExistenteException;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * 
 * @author Filipe Gomes
 *
 */
@Path("/usuario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioRest {

   private UsuarioDao dao;

   /**
    * Cria uma nova instância do tipo UsuarioRest.
    * <P>
    */
   public UsuarioRest()
   {
      dao = new UsuarioDao();
   }

   /**
    * Retorna todos os registros
    * 
    * @return
    * @throws SecurityException
    * @throws Exception
    */
	@GET
   public List<Usuario> getUsuarios() throws SecurityException, Exception
   {
      return dao.getUsuarios();
	}

   /**
    * @TODO Comentar Método
    * @param usuario
    * @return
    * @throws SecurityException
    * @throws Exception
    */
   @POST
   public Response salvar(final Usuario usuario) throws LoginExistenteException
   {
      try {
         return Response.ok(dao.salvarUsuario(usuario)).build();
      }
      catch (final LoginExistenteException e)
      {
         return Response.status(500).entity(new LoginExistenteException("Login existente.")).build();
      }
	}

}
