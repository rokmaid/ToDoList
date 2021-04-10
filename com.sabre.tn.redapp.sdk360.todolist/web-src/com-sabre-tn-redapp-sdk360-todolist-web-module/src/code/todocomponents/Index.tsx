

import * as React from "react";
import {Provider} from 'react-redux' ; 
import { ConfigureStore,runSaga } from "./LocalStore";
import App from './App'; 

export interface IndexProps {
 
    title:string 
  
  }
  
const store = ConfigureStore(); 
runSaga();

export class Index extends React.Component<IndexProps,{}> {



    render(){

        return (
         
            <Provider store={store} >

            <App />

            </Provider>

        )
    }


}
