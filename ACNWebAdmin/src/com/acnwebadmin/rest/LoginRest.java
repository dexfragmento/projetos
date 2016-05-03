package com.acnwebadmin.rest;

import com.acnwebadmin.dao.UsuarioDao;
import com.acnwebadmin.dto.LoginDto;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Login no sistema
 * 
 * @author Filipe Gomes
 */
@Path("/login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginRest
{

   private UsuarioDao dao;

   public LoginRest()
   {
      dao = new UsuarioDao();
   }

   @POST
   public Response autenticar(final LoginDto dto)
   {
      try{
         return Response.ok(dao.login(dto.getLogin(), dto.getSenha())).build();
      }catch(Exception e){
         return Response.status(500).entity(new Exception("Falha na autenticação.")).build();
      }
   }

}
