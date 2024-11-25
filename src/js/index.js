import { crudOperations } from "./crudOperations";
import {todoOperations} from "./toDoOperations";

export const taskManager = (function (){
    //where user tasks will be stored
    const toDoLists = {
        ["Default todo list: "]: [],
    }

    return {toDoLists}
})();

todoOperations.createList("work out");
console.log(taskManager.toDoLists);