"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=require("redux"),Reducers_1=require("./Reducers"),MySagas_1=require("./MySagas"),redux_saga_1=require("redux-saga"),reducers={todos:Reducers_1.todos},rootReducer=redux_1.combineReducers(reducers),sagaMiddleware=redux_saga_1.default();function runSaga(){sagaMiddleware.run(MySagas_1.listenForDispatchSaga)}exports.ConfigureStore=function(){return redux_1.createStore(rootReducer,redux_1.applyMiddleware(sagaMiddleware))},exports.runSaga=runSaga;
