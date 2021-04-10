import {createStore, combineReducers,applyMiddleware} from 'redux' ; 
import {todos} from './Reducers'; 
import {listenForDispatchSaga} from './MySagas' ; 
import createSagaMiddleware from 'redux-saga'


const reducers={todos} ;

const rootReducer = combineReducers(reducers); 
const sagaMiddleware = createSagaMiddleware() ; 

export const ConfigureStore = () =>
    createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware) 
       )  

export function runSaga(){
    sagaMiddleware.run(listenForDispatchSaga); ;
}
 