import { crudOperations } from "./crudOperations";
import {todoOperations} from "./toDoOperations";

export const taskManager = (function (){
    //where user tasks will be stored
    const toDoLists = {
        ["Default ToDo List"]: [],
    }
    const createTask = function(title, description, dueDate, priority, difficulty, taskList){
        const task = crudOperations.create(title, description, dueDate, difficulty, priority);
        todoOperations.appendTaskToList(task, taskList);
    }
    const getTasks = function(){
        crudOperations.read();
    }
    return { toDoLists, createTask, getTasks}
})();

taskManager.createTask("Thabisile's Birthday", "Make it special", new Date("2025-01-01T00:00:00"), 3, 3, "Default ToDo List");
taskManager.getTasks();