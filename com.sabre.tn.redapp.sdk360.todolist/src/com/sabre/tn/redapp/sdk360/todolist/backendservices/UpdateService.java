package com.sabre.tn.redapp.sdk360.todolist.backendservices;

import java.util.List;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointRequestWrapper;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.tn.redapp.sdk360.todolist.datamodels.Message;
import com.sabre.tn.redapp.sdk360.todolist.datamodels.MessageSearchRS;
import com.sabre.tn.redapp.sdk360.todolist.db.DBConnector;

public class UpdateService implements IUpdateService{

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		// TODO Auto-generated method stub
		
		
		System.out.println("UOLA "+this.getClass().getName()); 
		
		Message m = getMessage(extPointCommand);
		
		DBConnector connector = new DBConnector() ; 
		

		List<Message> list = connector.updateMessgae(m);
		
		MessageSearchRS messages = new MessageSearchRS() ; 
		messages.setMessages(list);
		
		FlowExtPointResponse resp= new FlowExtPointResponse();
		
	     resp.setStructure(messages);
		
		 FlowExtPointResponseWrapper responseWrapper = new FlowExtPointResponseWrapper();
	     responseWrapper.setOperation(FlowExtPointDataOperation.ADD);
	      responseWrapper.setResponse(resp);
	      extPointCommand.getResponses().add(responseWrapper);
		
		return extPointCommand;
	}

	private Message getMessage(FlowExtPointCommand extPointCommand) {
		
		for(FlowExtPointRequestWrapper r : extPointCommand.getRequests()) {
		
			if(r.getRequest() instanceof Message) {
				Message m =(Message)r.getRequest(); 
				
				return m ; 
			}
			   
		}
		
		return null ; 
	}
	
}
