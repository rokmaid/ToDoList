
import {CREATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,LOAD_TODO ,LOAD_TODO_SUCESS, CREATE_TODO_SUCESS, REMOVE_TODO_SUCESS} from './ReduxActions'; 
//import { takeLatest} from 'redux-saga/effects'
import {effects} from 'redux-saga';
import { TodoItem } from '../datamodels/ToDoItem';
import { MessageSearchRS } from '../datamodels/MessageSearchRS';
import { cf } from '../Context';
import { getTodoList,createToDo, removeToDo, completeToDo } from '../datamodels/backendservice';

const {takeLatest,takeEvery, put, call, select} = effects;


function* createTodo(action){

        
    console.log("#####  Saga for Create Dispatch ##### ")
    let {text} =action.payload ; 

    let todos = yield createToDo(text);

    yield put({type:CREATE_TODO_SUCESS ,payload:todos})

}

function* removeTodo(action){

    console.log("#####  Saga for Remove Dispatch ##### ")
    let {text} =action.payload ; 

    let todos = yield removeToDo(text);

    yield put({type:REMOVE_TODO_SUCESS ,payload:todos})

}

function* loadTodos(){

    try {
        
    console.log("### LOAD TODOS SAGA #### "); 

   let todos = yield getTodoList();

  // console.log("Todos list in Saga .." + todos) ; 

   yield put({type:LOAD_TODO_SUCESS ,payload:todos})

    } catch (error) {

        console.log("Error in Saga ");
        console.log(error); 
    }


}

function* completeTodo(action){

    console.log("#####  Saga for Complete Dispatch ##### ")

    let {text} =action.payload ; 

    let todos = yield completeToDo(text);

    yield put({type:CREATE_TODO_SUCESS ,payload:todos})

}

export function* listenForDispatchSaga() {

    yield takeLatest (CREATE_TODO, createTodo)
    yield takeLatest (REMOVE_TODO, removeTodo)
    yield takeLatest (COMPLETE_TODO, completeTodo)
    yield takeLatest (LOAD_TODO,loadTodos)
  }





