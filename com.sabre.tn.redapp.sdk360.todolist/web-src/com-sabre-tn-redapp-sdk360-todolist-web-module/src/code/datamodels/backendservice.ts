import { TodoListItem } from "../todocomponents/TodoListItem";
import { MessageSearchRS } from "./MessageSearchRS";
import { cf } from "sabre-ngv-app/cf";
import { TodoItem } from "./ToDoItem";
import { ToDoMessage } from "./ToDoMessage";


export async function getTodoList():Promise<any[]>{

let list  = [] ; 


await cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IGetToDosService:execute").retrieveData(MessageSearchRS).done(result =>{

  result.getSearchResults().forEach(m=>{

  console.log(JSON.stringify(m));
  //console.log(m['data']);

  let json = JSON.stringify(m) ;
 let  msgobj = JSON.parse(json); 
 console.log(msgobj['data.msg'] );

 let message={
     text:msgobj['data.msg'],
     completed:msgobj['data.completed']

 }
    list.push(message);
  })

});

return list ; 

}


export async function createToDo(text:string):Promise<any[]>{

  let list  = [] ; 
  
  let msg :ToDoMessage = new ToDoMessage(text,'false'); 
  await cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IInsertService:execute").addRequestDataObject(msg).retrieveData(MessageSearchRS).done(result =>{
  
    result.getSearchResults().forEach(m=>{
  
    console.log(JSON.stringify(m));
    //console.log(m['data']);
  
    let json = JSON.stringify(m) ;
   let  msgobj = JSON.parse(json); 
   console.log(msgobj['data.msg'] );
  
   let message={
       text:msgobj['data.msg'],
       completed:msgobj['data.completed']
  
   }
      list.push(message);
    })
  
  });
  
  return list ; 
  
  }

  export async function removeToDo(text:string):Promise<any[]>{

    let list  = [] ; 
    
    let msg :ToDoMessage = new ToDoMessage(text,'false'); 
    await cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IDeleteService:execute").addRequestDataObject(msg).retrieveData(MessageSearchRS).done(result =>{
    
      result.getSearchResults().forEach(m=>{
    
      console.log(JSON.stringify(m));
      //console.log(m['data']);
    
      let json = JSON.stringify(m) ;
     let  msgobj = JSON.parse(json); 
     console.log(msgobj['data.msg'] );
    
     let message={
         text:msgobj['data.msg'],
         completed:msgobj['data.completed']
    
     }
        list.push(message);
      })
    
    });
    
    return list ; 
    
    }

    export async function completeToDo(text:string):Promise<any[]>{

      let list  = [] ; 
      
      let msg :ToDoMessage = new ToDoMessage(text,'false'); 
      
      await cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IUpdateService:execute").addRequestDataObject(msg).retrieveData(MessageSearchRS).done(result =>{
      
        result.getSearchResults().forEach(m=>{
      
        console.log(JSON.stringify(m));
        //console.log(m['data']);
      
        let json = JSON.stringify(m) ;
       let  msgobj = JSON.parse(json); 
       console.log(msgobj['data.msg'] );
      
       let message={
           text:msgobj['data.msg'],
           completed:msgobj['data.completed']
      
       }
          list.push(message);
        })
      
      });
      
      return list ; 
      
      }