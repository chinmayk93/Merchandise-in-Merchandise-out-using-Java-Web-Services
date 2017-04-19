
package sdsu;

import java.sql.*;
import java.util.*;
import java.io.*;
import java.security.*;

public class DBConnection implements java.io.Serializable {
    private static String connectionURL = "jdbc:mysql://opatija:3306/jadrn022?user=jadrn022&password=removal";               
    private static Connection connection = null;
    private static Statement statement = null;
    private static ResultSet resultSet = null;

    public DBConnection() {}    
    
    public static Vector runQuery(String s) {
        String answer = "";
        Vector<String []> answerVector = null;
		
	try {
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	connection = DriverManager.getConnection(connectionURL);
	statement = connection.createStatement();
	resultSet = statement.executeQuery(s);        
        ResultSetMetaData rsmd = resultSet.getMetaData();
        answerVector = new Vector<String []>();
	while(resultSet.next()) {
            String [] row = new String[rsmd.getColumnCount()];
            for(int i=0; i < rsmd.getColumnCount(); i++)
                row[i] = resultSet.getString(i+1);
            answerVector.add(row);       
		}
	}
	catch(Exception e) {
	    e.printStackTrace();
	}
        finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
            	    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
          }
        return answerVector;
    }    
    public static String getEncryptedPassword(String str) {
        try {
            MessageDigest d = MessageDigest.getInstance("MD5");
            byte [] b = str.getBytes();
            d.update(b);
            return  byteArrayToHexString(d.digest());
       }
        catch(Exception e) {
            e.printStackTrace();
            }
    return null;
    }

    private static String byteArrayToHexString(byte[] b){
        String str = "";
        for(int i=0; i < b.length; i++) {
            int value = b[i] & 0xFF;
            if(value < 16)
                str += "0";
            str += Integer.toHexString(value);
            }
        return str.toUpperCase();
        }

public static boolean isValidLogin(String username, String password)
{
  boolean flag=false;
  String encryptedPassword = getEncryptedPassword(password);
  try{
   Class.forName("com.mysql.jdbc.Driver").newInstance();
   connection = DriverManager.getConnection(connectionURL);
   statement = connection.createStatement();
   resultSet = statement.executeQuery("select * from user where username='" + username +"' and password= '" + encryptedPassword  +"'");
   if(resultSet.next())
     flag = true;
   }catch(Exception e){
     e.printStackTrace();
   }
   finally{
   try{
   if(resultSet != null)
      resultSet.close();
   if(statement != null)
      statement.close();
   if(connection != null)
      connection.close();
   }catch(SQLException e){}
   }
 return flag;
}
public static String getInfo(String sku) {
   String info="";
 
   try {
          Class.forName("com.mysql.jdbc.Driver").newInstance();
          connection = DriverManager.getConnection(connectionURL);
          statement = connection.createStatement();
          resultSet = statement.executeQuery("select vendor.name,category.name,vendorModel,description,features,cost,retail,image from vendor, category, product where sku='" + sku +"' and product.venId=vendor.id and product.catId=category.id");
          if(resultSet.next()) 
            info = resultSet.getString(1)+"|"+resultSet.getString(2)+"|"+resultSet.getString(3)+"|"+resultSet.getString(4)+"|"+resultSet.getString(5)+"|"+resultSet.getString(6)+"|"+resultSet.getString(7)+"|"+resultSet.getString(8); 
          else 
            info = "fail"; 
    }catch (Exception e) {
        e.printStackTrace();
    }
    return info;
} 
public static void insertReceivedInfo(String sku, String date, String quantity){
    try {
          Class.forName("com.mysql.jdbc.Driver").newInstance();
          connection = DriverManager.getConnection(connectionURL);
          statement = connection.createStatement();
          int i = statement.executeUpdate("insert into merchandise_in values('"+ sku +"' ,'"+ date +"' ,'"+ quantity +"' )");

          statement = connection.createStatement();
          resultSet = statement.executeQuery("select * from on_hand where sku = '"+ sku +"'");
          if(resultSet.next())
          {
               statement = connection.createStatement();
               int j = statement.executeUpdate("update on_hand set on_hand_quantity = on_hand_quantity + '"+ quantity +"', last_date_modified='"+ date +"' where sku = '"+ sku +"'");
          }else{
               statement = connection.createStatement();
               int k = statement.executeUpdate("insert into on_hand values('"+ sku +"' ,'"+ date +"' ,'"+ quantity +"' )");
          } 
       
    }catch (Exception e) {
        e.printStackTrace();
    }
}

public static String insertSentInfo(String sku, String date, String quantity){
   String result="";
    try {
          Class.forName("com.mysql.jdbc.Driver").newInstance();
          connection = DriverManager.getConnection(connectionURL);
          statement = connection.createStatement();
          resultSet = statement.executeQuery("select on_hand_quantity from on_hand where sku = '"+ sku +"'");
          if(resultSet.next() && (Integer.parseInt(resultSet.getString(1)) >= Integer.parseInt(quantity)))
          {
               statement = connection.createStatement();
               int i = statement.executeUpdate("insert into merchandise_out values('"+ sku +"' ,'"+ date +"' ,'"+ quantity +"' )");
               statement = connection.createStatement();
               int j = statement.executeUpdate("update on_hand set on_hand_quantity = on_hand_quantity - '"+ quantity +"', last_date_modified='"+ date +"' where sku = '"+ sku +"'");
               result = "success";  
          }else{
               result = "fail";
          }
    }catch (Exception e) {
        e.printStackTrace();
    }
    return result;
}

   public static String doQuery(String s) {
                String answer = "";
              boolean flag=false;		
		try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL);
		statement = connection.createStatement();
		resultSet = statement.executeQuery(s);
                ResultSetMetaData rsmd = resultSet.getMetaData();                
                answer += "<h2>Results from the database:</h2>\n";
                answer += "<table>\n";                
		while(resultSet.next()) {
                    flag=true;
                    int columns = rsmd.getColumnCount();
                    answer += "<tr>\n";
                    for(int i=1; i <= columns; i++)  {                      
                        answer += "<td>"+rsmd.getColumnName(i) + "</td><td>" + 
                                resultSet.getString(rsmd.getColumnName(i)) + "</td>\n"; 
                        }
                    answer += "</tr>\n";                                                                                 
		    }
                answer += "</table>\n";                    
		}
		catch(Exception e) {
			e.printStackTrace();
			}
            finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
            	    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
          }
        return answer;
    }


}            
	
	

