
export const LOAD_TODO ='LOAD_TODO'; 
export const LOAD_TODO_SUCESS ='LOAD_TODO_SUCESS'; 

export const CREATE_TODO ='CREATE_TODO'; 
export const CREATE_TODO_SUCESS ='CREATE_TODO_SUCESS';
export const REMOVE_TODO ='REMOVE_TODO'; 
export const REMOVE_TODO_SUCESS ='REMOVE_TODO_SUCESS'; 
export const COMPLETE_TODO ='COMPLETE_TODO'; 
export const COMPLETE_TODO_SUCESS ='COMPLETE_TODO_SUCESS'; 
/*
Set of Actions to pass to our reducer to create , remove or complete a todo item 
*/

export const loadTodos = ()=>({
    
    type:LOAD_TODO 


})


export const createTodo = text=>({
     
    type:CREATE_TODO ,
    payload :{text},


})

export const removeTodo = text=>({
     
    type:REMOVE_TODO ,
    payload :{text}


})


export const completeTodo =text=>({
     
    type:COMPLETE_TODO ,
    payload :{text}


})