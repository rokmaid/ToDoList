import { RequestData } from "sabre-ngv-app/app/common/data/dto/request/RequestData";
import { IMessage } from "./IMessage";


export class ToDoMessage extends RequestData<IMessage>{


    constructor(private msg :string , private completed :string ){
        super()
    }


    getRequestStructure(): IMessage {

        return {
            'data.Message': [{
                'data.msg': this.msg ,
                'data.completed':this.completed
            
            }]
        };

    }
}