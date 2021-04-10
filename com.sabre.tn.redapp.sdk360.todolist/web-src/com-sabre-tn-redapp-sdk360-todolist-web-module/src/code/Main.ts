import {Module} from 'sabre-ngv-core/modules/Module';
import { RedAppSidePanelConfig } from 'sabre-ngv-xp/configs/RedAppSidePanelConfig';
import { RedAppSidePanelButton } from 'sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton';
import { getService, cf } from './Context';
import { LayerService } from 'sabre-ngv-core/services/LayerService';
import { ExtensionPointService } from 'sabre-ngv-xp/services/ExtensionPointService';
import { Index } from './todocomponents/Index';
import { MessageSearchRS } from './datamodels/MessageSearchRS';
import { DtoService } from 'sabre-ngv-app/app/services/impl/DtoService';
import { ToDoMessage } from './datamodels/ToDoMessage';

export class Main extends Module {
    init(): void {
        super.init();
        // initialize your module here

        let xp :ExtensionPointService  =getService(ExtensionPointService);

        let config_botones:RedAppSidePanelConfig = new RedAppSidePanelConfig(

            [


                new RedAppSidePanelButton("Todo List ","btn btn-secondary side-panel-button",()=>{
                   
               //  this.callBackEndService(); \
             //  this.sendDataToBackEnd();

                 getService(LayerService).showOnLayer(Index,{display:'areaOut',position:33},{title:"Todo List"} )  ;
                 

                }) 
            ]

            
            )  

       
            xp.addConfig('redAppSidePanel',config_botones);
            getService(DtoService).registerDataModel('[.Structure][.ExtensionPoint_Summary][data.MessageSearchRS][0]', MessageSearchRS);          


    }


    callBackEndService(){


      let result =  cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IGetToDosService:execute").retrieveData(MessageSearchRS);
     
      result.done(resp=>{

        resp.getSearchResults().forEach(m=>{

            console.log(m); 

        }) 
      })

    }

    sendDataToBackEnd(){

        let result =  cf("NGV://REDAPP/SERVICE/com.sabre.tn.redapp.sdk360.todolist.backendservices.IDeleteService:execute").addRequestDataObject(new ToDoMessage('rk11 from db','false')).retrieveData(MessageSearchRS);


        result.done(resp=>{

            resp.getSearchResults().forEach(m=>{

                console.log(m); 
            })
        })
    }
}
