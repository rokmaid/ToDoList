
import React = require("react");
import {connect} from 'react-redux' ; 
import {createTodo } from './ReduxActions'; 

import { TodoListItemData } from "./App";

export interface NewTodoFormProps {

    todos:TodoListItemData[],
    onCreatePressed 
}

export interface NewTodoFormState {

    value:string 
}

 class NewTodoForm extends React.Component<NewTodoFormProps,NewTodoFormState>{

componentWillMount(){

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);

}


handleChange(event) {
    this.setState({value: event.target.value});
  }

handleKeyPress(e){
    console.log("key pressed ")
  if(e.key === 'Enter'){

    this.props.onCreatePressed(this.state.value) ; this.setState({value:''})

  }

  }

  
    render(){
       // const [inputValue,setInputValue] = useState('');

     return (
        <div className="new-todo-form" >

       <input type="text" className="new-todo-input" 
        placeholder="new todo item "
        value={this.state.value} onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}/> 
       <button className="btn-success"
       onClick={()=>{this.props.onCreatePressed(this.state.value) ; this.setState({value:''}) } 
                    }> Create Todo</button>
       </div>   
     )

    }


}

const mapStateToProps=state=>({

    todos : state.todos ,


}) ; 

const mapDispatchToProps=dispatch=>({

onCreatePressed : text => dispatch(createTodo(text)),

}) ; 

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm) ; 