import { crudTaskOperations } from "./crudTaskOperations";
import { crudListOperations } from "./crudListOperations";
import {todoOperations} from "./toDoOperations";

export const taskManager = (function (){
    //where user tasks will be stored
    const createTask = function(title, description, dueDate, priority, difficulty, taskList){
        const task = crudTaskOperations.create(title, description, dueDate, difficulty, priority);
        todoOperations.appendTaskToList(task, taskList);
    }
    const getTasks = function(taskList){
        crudTaskOperations.readTask(taskList);
    }
    const updateTitle = function(task, taskList, title){
        crudTaskOperations.updateTitle(task, taskList, title);
    }
    const removeTask = function(task, taskList){
        crudTaskOperations.delTask(task, taskList)
    }
    return { createTask, getTasks, removeTask, updateTitle}
})();
export const listManager = (function(){
    //where user lists will be stored
    const toDoLists = {
        ["Default"]: [],
    }
    const createList = function(title){
        crudListOperations.createList[title];
    }
    const getLists = function(){
        crudListOperations.read();
    }
    const removeLists = function(task, taskList){
        crudListOperations.del(task, taskList)
    }
    return{ toDoLists,  getLists, createList, removeLists }
})();

taskManager.createTask("Thabisile's birthday", "Make it special : )", new Date("2025-01-01T00:00:00"), 3, 3, "Default");
taskManager.getTasks("Default");
taskManager.updateTitle(0, "Default", "My baby's birthday");
taskManager.removeTask(0, "Default");
