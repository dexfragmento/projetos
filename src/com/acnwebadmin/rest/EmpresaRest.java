
package com.acnwebadmin.rest;

import com.acnwebadmin.dao.EmpresaDao;
import com.acnwebadmin.entity.Empresa;
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
@Path("/empresa")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EmpresaRest
{

   private EmpresaDao dao;

   /**
    * Cria uma nova instância do tipo CargoRest.
    * <P>
    */
   public EmpresaRest()
   {
      dao = new EmpresaDao();
   }

   /**
    * Retorna todos os cargos (ativos)
    * 
    * @return
    * @throws SecurityException
    * @throws Exception
    */
   @GET
   public List<Empresa> getEmpresas() throws SecurityException, Exception
   {
      return dao.getEmpresas();
   }

   /**
    * Salva empresa
    * 
    * @param empresa
    * @return Response
    * @throws SecurityException
    * @throws Exception
    */
   @POST
   public Response salvar(Empresa empresa) throws SecurityException, Exception
   {
      empresa = dao.salvarEmpresa(empresa);
      return Response.status(201).entity(empresa).build();
   }

   /**
    * Deleta cargo do banco
    * 
    * @param id
    * @return List<Empresa>
    * @throws SecurityException
    * @throws Exception
    */
   @DELETE
   @Path("/{id}")
   public List<Empresa> deletar(@PathParam("id") Long id) throws SecurityException, Exception
   {      
      return dao.deletarEmpresaComListaRetornoAtivados(id);
   }

}
