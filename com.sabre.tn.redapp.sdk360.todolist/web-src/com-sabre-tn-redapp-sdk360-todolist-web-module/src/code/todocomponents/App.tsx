import * as React from "react";
import { getService } from "../Context";
import { LayerService } from "sabre-ngv-core/services/LayerService";
import  TodoList  from "./todoList";
import { loadTodos } from "./ReduxActions";
import { connect } from 'react-redux';

export interface AppProps {
 
  title:string ,
  loadTodos

}

export interface TodoListItemData {

 text:string , 
 isCompleted:boolean 

}

 class App extends React.Component<AppProps,{}>{

    handleClose(): void {
        getService(LayerService).clearLayer(33);
    }

    componentWillMount(){
        this.props.loadTodos(); 
  
      }
  
    render(){

      
        return (
        <div className="react-modal">
         <div className="modal-dialog"> 
         <div className="modal-content">
         <div className="modal-header">
 <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
 <span aria-hidden="true">&times;</span>
</button>
 <h3 className="panel-title">To Do List</h3>
 </div>  
 <div className="modal-body">

<TodoList />

 </div>
    </div>   
         </div> 
         </div> 
                        
            
            ); 
    }

}


const mapStateToProps=state=>({

   
   
   }) ; 
   
   
   const mapDispatchToProps=dispatch=>({
   
     //  updateInputText : text => dispatch(searchRemarks(text)),
         loadTodos : ()=>dispatch(loadTodos())  
       
       }) ;
   
    export default connect(mapStateToProps,mapDispatchToProps)(App) ; 
