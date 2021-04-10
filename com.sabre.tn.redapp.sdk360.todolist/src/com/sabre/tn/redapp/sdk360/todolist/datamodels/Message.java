package com.sabre.tn.redapp.sdk360.todolist.datamodels;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Message",
namespace = "http://com.sabre.tn.redapp.sdk360.todolist")
@XmlRootElement(name = "Message",
namespace = "http://com.sabre.tn.redapp.sdk360.todolist")
public class Message {

	@XmlElement(namespace = "http://com.sabre.tn.redapp.sdk360.todolist",
            required = true)
	String completed ; 
	
	
	@XmlElement(namespace = "http://com.sabre.tn.redapp.sdk360.todolist",
            required = true)
	String msg ;


	public String getCompleted() {
		return completed;
	}


	public void setCompleted(String completed) {
		this.completed = completed;
	}


	public String getMsg() {
		return msg;
	}


	public void setMsg(String msg) {
		this.msg = msg;
	}


	@Override
	public String toString() {
		return "Message [completed=" + completed + ", msg=" + msg + "]";
	} 
	
	
	
	
}
