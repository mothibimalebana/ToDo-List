import { taskManager } from "./index";

export const todoOperations = (function (){
    //exta functionalities will be added here
    const createList = function (title){    //creates a new 'list' for projects
        taskManager.toDoLists[title] = [];
        transferList(title);
        return title
    }
    const transferList = function(userList){
        taskManager.toDoLists[userList] = [];
        console.log(`object created: ${userList}`);
    }
    const appendTaskToList = function(task, listName){
        taskManager.toDoLists[listName].push(task);
    }

    return {createList, transferList, appendTaskToList};
})();

