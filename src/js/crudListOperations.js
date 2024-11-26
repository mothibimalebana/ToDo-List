import _ from "lodash";
import { listManager } from "./index";

export const crudListOperations = (function (){
    //create array of lists
    const createList = function (title){    //creates a new 'list' for projects
        listManager.toDoLists[title] = [];
    }
    const readList = function(taskList){
        console.log(listManager.toDoLists);
    }
    const updateTitle = function( listName, title){
        createList(title);
        listManager.toDoLists[title] = listManager.toDoLists[listName];
        delList(listName);
    }
    const delList = function(taskList){
        delete listManager.toDoLists[taskList];
    }

    return{ createList, readList, updateTitle, delList};
})();