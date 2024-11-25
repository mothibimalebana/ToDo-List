import { crudOperations } from "./crudOperations";
import {todoOperations} from "./toDoOperations";

export const taskManager = (function (){
    //where user tasks will be stored
    const toDoLists = {
        ["Default ToDo List: "]: [],
    }
    
    return {toDoLists}
})();

const workout = todoOperations.createList("work out");
const task1 = crudOperations.createTask("Thabisile's Day : )", "make it special for her", new Date("2025-01-01T00:00:00"), 3);
todoOperations.appendTaskToList(task1, "Default todo list: ")
console.log(taskManager.toDoLists);