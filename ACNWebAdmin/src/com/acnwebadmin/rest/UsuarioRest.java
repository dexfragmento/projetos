package com.acnwebadmin.rest;

import com.acnwebadmin.dao.UsuarioDao;
import com.acnwebadmin.entity.Usuario;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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

}
