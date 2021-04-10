import { EnhancedResponseData } from "sabre-ngv-app/app/common/data/dto/EnhancedResponseData";
import { Initial } from "sabre-ngv-core/decorators/classes/Initial";
import { DataOptions } from "sabre-ngv-app/app/common/data/dto/DataOptions";
import { AbstractModelOptions } from "sabre-ngv-app/app/AbstractModelOptions";
import { TodoItem } from "./ToDoItem";


@Initial<DataOptions>({
    dataRoot: '[d.Structure][o.ExtensionPoint_Summary][data.MessageSearchRS][0]'
})

@Initial<AbstractModelOptions>({
    autoPropagateData: true,
    nonLazyMembers: [
        'Message'
    ]
})
export class MessageSearchRS extends EnhancedResponseData {



    getSearchResults() {
        return this.fromRoot().get<Array<JSON>>('[Messages]').value().map(function (item: Object) {
            return new TodoItem(item);
        });
    }


}