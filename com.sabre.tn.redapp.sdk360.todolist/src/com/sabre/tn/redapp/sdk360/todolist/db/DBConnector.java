package com.sabre.tn.redapp.sdk360.todolist.db;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.sabre.tn.redapp.sdk360.todolist.Activator;
import com.sabre.tn.redapp.sdk360.todolist.datamodels.Message;

public class DBConnector {
	
  private Connection conn = null;  
	
	private void connect() {
		
		try {
			
			   Class.forName("org.sqlite.JDBC");
			  
			   File db =  Activator.getDefault().getDataFile(Activator.PLUGIN_ID,"DB/toDo.db");
			   String url = "jdbc:sqlite:"+db.getAbsolutePath(); 
			
			   // create a connection to the database  
	            this.conn = DriverManager.getConnection(url);  
	              
	            System.out.println("##### Conexion exitosa #####");  
	            
	            
	            
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	public  void Disconnect() {
		try {
			
			this.conn.close();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public List<Message> getMessages() throws SQLException{
		this.connect();
		ArrayList<Message> message_list = new ArrayList<Message>();
		 String sql = "Select * from ToDos " ; 
		 
		   Statement stmt;
		
			stmt = this.conn.createStatement();
			
		    ResultSet rs    = stmt.executeQuery(sql);
		    
		    while(rs.next()) {
		    	Message m = new Message() ; 
		    
		    	m.setMsg(rs.getString(1));
		    	m.setCompleted(rs.getString(2));
		    	message_list.add(m);
		    }
		    
		    return message_list ; 
		    

	}

	public List<Message> insertMessgae(Message msg ) throws SQLException{
		this.connect();
		
		String sql ="insert into ToDos values('"+msg.getMsg()+"','"+msg.getCompleted()+"')";
		 Statement stmt;

			stmt = this.conn.createStatement();
			
			stmt.executeUpdate(sql);
			
			ArrayList<Message> message_list = new ArrayList<Message>();
			String sql_select_all = "Select * from ToDos " ; 
			
    ResultSet rs    = stmt.executeQuery(sql_select_all);
		    
		    while(rs.next()) {
		    	Message m = new Message() ; 
		    
		    	m.setMsg(rs.getString(1));
		    	m.setCompleted(rs.getString(2));
		    	message_list.add(m);
		    }
		    
		    return message_list ; 

	}
	
	public List<Message> deleteMessgae(Message msg ) throws SQLException{
		this.connect();
		
		String sql ="Delete from ToDos where msg='"+msg.getMsg()+"'" ;
		
		 Statement stmt;
		  
			stmt = this.conn.createStatement();
			
			stmt.executeUpdate(sql);
			
			ArrayList<Message> message_list = new ArrayList<Message>();
			String sql_select_all = "Select * from ToDos " ; 
			
    ResultSet rs    = stmt.executeQuery(sql_select_all);
		    
		    while(rs.next()) {
		    	Message m = new Message() ; 
		    
		    	m.setMsg(rs.getString(1));
		    	m.setCompleted(rs.getString(2));
		    	message_list.add(m);
		    }
		    
		    return message_list ; 
	
	}
	
	public List<Message> updateMessgae(Message msg ){
		
		this.connect();
		
		String sql ="update ToDos set completed='true'"+
				"where msg='"+msg.getMsg()+"'" ;
		
	
		 Statement stmt;
		  
		try {
			stmt = this.conn.createStatement();
			
			stmt.executeUpdate(sql);
			
			ArrayList<Message> message_list = new ArrayList<Message>();
			String sql_select_all = "Select * from ToDos " ; 
			
    ResultSet rs    = stmt.executeQuery(sql_select_all);
		    
		    while(rs.next()) {
		    	Message m = new Message() ; 
		    
		    	m.setMsg(rs.getString(1));
		    	m.setCompleted(rs.getString(2));
		    	message_list.add(m);
		    }
		    
		    return message_list ; 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			Disconnect();
		}
		
		
		return null ; 
	}
	
	
}
