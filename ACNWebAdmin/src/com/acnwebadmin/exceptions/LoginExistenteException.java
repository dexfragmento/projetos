package com.acnwebadmin.exceptions;

/**
 * Exception para login existente
 * 
 * @author Filipe Gomes
 *         <DD>
 */
public class LoginExistenteException extends Exception
{

   /** @TODO Comentar atributo */
   private static final long serialVersionUID = 5100805649946899955L;

   public LoginExistenteException(final String msg)
   {
      super(msg);
   }

}
