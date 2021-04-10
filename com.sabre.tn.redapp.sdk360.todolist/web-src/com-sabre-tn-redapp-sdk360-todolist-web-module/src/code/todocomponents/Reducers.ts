import {CREATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    LOAD_TODO,
    LOAD_TODO_SUCESS,CREATE_TODO_SUCESS, REMOVE_TODO_SUCESS, COMPLETE_TODO_SUCESS} from './ReduxActions'; 
import { initialize } from 'redux-form';


let intialState ={

    todos:[]

}

    export const todos = (state=intialState,action) =>{

        const {type,payload} =action ; 
    
        switch (type) {

            case LOAD_TODO :{

            return state ; 
            }

            case LOAD_TODO_SUCESS :{

                console.log("### new state "); 
                console.log(payload); 
                
                let newState = Object.assign({},state,{ todos:payload}); 
                return newState ; 
            }

            case CREATE_TODO:{
    
                const {text} = payload ; 
            
                return state ; 

            }

            case CREATE_TODO_SUCESS:{
             
                let newState = Object.assign({},state,{ todos:payload}); 
                return newState ; 

            }
        
            case REMOVE_TODO:{
         
                const {text} = payload ; 
            
                return state ; 
    
            }

            case REMOVE_TODO_SUCESS:{
         
                let newState = Object.assign({},state,{ todos:payload}); 

                return newState ; 
    
            }
            case COMPLETE_TODO: {
    
               const {text} = payload ; 
            
                return state ; 
    
            }
            case COMPLETE_TODO_SUCESS: {
    
                let newState = Object.assign({},state,{ todos:payload}); 

                return newState ; 
     
             }
    
            default : 
    
            return state ; 
        
        }
    }