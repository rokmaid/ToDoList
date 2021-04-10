package com.sabre.tn.redapp.sdk360.todolist.backendservices;

import java.sql.SQLException;
import java.util.List;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.sdk360.todolist.datamodels.Message;
import com.sabre.tn.redapp.sdk360.todolist.datamodels.MessageSearchRS;
import com.sabre.tn.redapp.sdk360.todolist.db.DBConnector;

public class GetTodosService implements IGetToDosService {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		// TODO Auto-generated method stub
		
		System.out.println(this.getClass().getName());
		
		DBConnector connector = new DBConnector() ; 
		List<Message> list;
		
		try {
			
			list = connector.getMessages();
			MessageSearchRS messages = new MessageSearchRS() ; 
			messages.setMessages(list);
			
			FlowExtPointResponse resp= new FlowExtPointResponse();
			
		     resp.setStructure(messages);
			
			 FlowExtPointResponseWrapper responseWrapper = new FlowExtPointResponseWrapper();
		     responseWrapper.setOperation(FlowExtPointDataOperation.ADD);
		      responseWrapper.setResponse(resp);
		      extPointCommand.getResponses().add(responseWrapper);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
		
			connector.Disconnect();
		}
		
		return extPointCommand;
	}

}
