import * as React from "react";
import {connect} from 'react-redux' ; 



export interface  todoListItemPropos {
    item 
    onRemovedPressed,
    onCompletedPressed

}


export class TodoListItem extends React.Component<todoListItemPropos,{} > {

    render(){
        console.log(" Item ..")
        console.log(this.props.item);

        return (
         
            <div className="todo-item-container"> 
            <h3> {this.props.item.text}  </h3> 
               
            <div className="buttons-container">

            {this.props.item.completed =='true' ? null :<button className="btn-primary" 
             onClick={()=>{  this.props.onCompletedPressed(this.props.item.text) }  }
            >Mark as Completed  </button>  } 
             <button className="remove-button"
             onClick={()=>{  this.props.onRemovedPressed(this.props.item.text)  }}
             > Remove  </button>  
          
            </div>

            </div>
        )
    }
    


}


