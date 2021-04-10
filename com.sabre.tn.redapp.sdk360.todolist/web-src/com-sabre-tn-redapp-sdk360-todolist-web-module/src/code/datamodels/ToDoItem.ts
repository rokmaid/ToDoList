import { AbstractModel } from "sabre-ngv-app/app/AbstractModel";
import { Initial } from "sabre-ngv-core/decorators/classes/Initial";
import { AbstractModelOptions } from "sabre-ngv-app/app/AbstractModelOptions";

@Initial<AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: [
        'completed',
        'msg'
       
    ]
})

export class TodoItem extends AbstractModel {

    constructor(public result: any) {
        super(result);
    };

    getMsg(): string {
        return <string>this.get('msg');
    }

    getCompleted(): string {
        return <string>this.get('completed');
    }



}