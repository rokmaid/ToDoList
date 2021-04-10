import React = require("react");
import  NewTodoForm  from "./NewTodoFrom";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemData } from "./App";
import {connect} from 'react-redux' ; 
import {removeTodo,completeTodo} from './ReduxActions' ; 


export interface  todoListProps {
    todos,
    onRemovedPressed,
    onCompletedPressed

}


 class TodoList extends React.Component<todoListProps,{}> {

    componentWillMount(){

     //   console.log("Todo List Propos "); 
      //  console.log(this.props); 
    }

    render(){

        return (

            <div className="com-sabre-tn-redapp-sdk360-todolist-web-module"> 
                <div className='list-wrapper'>
                <NewTodoForm  /> 
                {
                this.props.todos.todos.length==0 ? null :  this.props.todos.todos.map( item =>( <TodoListItem 
                 item={item} 
                 onRemovedPressed={this.props.onRemovedPressed}
                 onCompletedPressed={this.props.onCompletedPressed}

                  /> 
                 )) 
                }
               

                </div>
            </div>

        )
   
    }




}


const mapStateToProps=state=>({

    todos: state.todos,

}) ; 

const mapDispatchToProps=dispatch=>({

onRemovedPressed : text =>dispatch(removeTodo(text)),
onCompletedPressed: text=>dispatch(completeTodo(text)),


}) ; 

export default connect(mapStateToProps,mapDispatchToProps)(TodoList) ; 