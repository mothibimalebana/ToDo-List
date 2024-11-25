import { taskManager, listManager } from "./index";

export const todoOperations = (function (){
    //exta functionalities will be added here
    const appendTaskToList = function(task, listName){
        listManager.toDoLists[listName].push(task);
    }

    return { appendTaskToList};
})();

