package com.acnwebadmin.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import sun.misc.BASE64Encoder;

/**
 * Util de encriptação de senha MD5 + Base64
 * 
 * @author Filipe Gomes
 *         <DD>
 */
@SuppressWarnings("restriction")
public class MD5Util
{

   private static MessageDigest digester;

   static
   {
      try
      {
         digester = MessageDigest.getInstance("MD5");
      }
      catch (NoSuchAlgorithmException e)
      {
         e.printStackTrace();
      }
   }

   /**
    * encriptar string
    * 
    * @param str
    * @return String
    */
   public static String encriptar(final String str)
   {
      if (str == null || str.length() == 0)
      {
         throw new IllegalArgumentException("O objeto String para encriptação não pode ser nulo ou ter tamanho 0.");
      }

      digester.update(str.getBytes());
      final byte[] hash = digester.digest();
      StringBuffer hexString = new StringBuffer();
      for (int i = 0; i < hash.length; i++)
      {
         if ((0xff & hash[i]) < 0x10)
         {
            hexString.append("0" + Integer.toHexString((0xFF & hash[i])));
         }
         else
         {
            hexString.append(Integer.toHexString(0xFF & hash[i]));
         }
      }
      final BASE64Encoder encoder = new BASE64Encoder();
      return encoder.encode(hexString.toString().getBytes());
   }

   public static void main(String args[])
   {
      System.out.println(encriptar("acn@123"));
   }
}
