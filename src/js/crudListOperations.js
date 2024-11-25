import { listManager } from ".";

export const crudListOperations = (function (){
    //create array of lists
    const createList = function (title){    //creates a new 'list' for projects
        listManager.toDoLists[title] = [];
    }
    const readList = function(taskList){
        console.log(listManager.toDoLists[taskList]);
    }
    const updateTitle = function( taskList, title){
        listManager.toDoLists[taskList] = `${title}`;

    }
    const delList = function(taskList){
        delete listManager.toDoLists[taskList];
    }

    return{ createList, readList, updateTitle, delList};
}) 