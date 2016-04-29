package com.acnwebadmin.dao;

import com.acnwebadmin.entity.Usuario;
import com.acnwebadmin.util.MD5Decoder;
import java.util.List;

/**
 * 
 * @author Filipe Gomes
 *
 */
public class UsuarioDao extends GenericDao<Long, Usuario>
{

   /**
    * Cria uma nova instância do tipo UsuarioDao.
    * <P>
    */
   public UsuarioDao()
   {
      super(Usuario.class);
	}

   /**
    * salvar registro
    * 
    * @param login
    * @param senha
    * @throws SecurityException
    * @throws Exception
    */
	public void salvar(final String login, final String senha) throws SecurityException, Exception {		
		final Usuario usuario = new Usuario();
		usuario.setLogin(login);
      usuario.setSenha(new MD5Decoder().encode(senha));
      super.salvar(usuario);
	}
	
   /**
    * retornar todos os registros ativados
    * 
    * @return List<Usuario>
    */
   public List<Usuario> getUsuarios()
   {
      return super.findAllActivated(Boolean.TRUE);
	}

}
