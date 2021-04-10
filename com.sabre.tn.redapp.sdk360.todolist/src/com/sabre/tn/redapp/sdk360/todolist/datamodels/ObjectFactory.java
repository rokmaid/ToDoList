package com.sabre.tn.redapp.sdk360.todolist.datamodels;

import javax.xml.bind.annotation.XmlRegistry;

@XmlRegistry
public class ObjectFactory {
	
	
	public Message createMessage() {
		
		return new Message() ; 
	}

	public MessageSearchRS createMessageSearchRS() {
		return new MessageSearchRS() ; 
	}
	
	
}
