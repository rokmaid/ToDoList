package com.sabre.tn.redapp.sdk360.todolist.datamodels;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


@XmlRootElement(name = "MessageSearchRS", namespace = "http://com.sabre.tn.redapp.sdk360.todolist")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MessageSearchRS",
namespace = "http://com.sabre.tn.redapp.sdk360.todolist")
public class MessageSearchRS {
	
	@XmlElement(name = "Messages", required = true)
	List<Message> messages ; 
	
	public List<Message> getMessages() {
		if (messages == null) {
			this.messages = new ArrayList<Message>();
		}
		return messages;
	}



	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}
	
	

}
