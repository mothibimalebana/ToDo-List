import { formatDistanceToNow } from "date-fns";
import { listManager, taskManager } from "./index";

export const crudTaskOperations = (function (){     //where crud operations will be defined
//create a task object
    const create = function (title, description, dueDate, priority, difficulty) {   //create tasks
        const priorityLevels =  {
            1: "Low",
            2: "Medium",
            3: "High",
        };
        const difficultyLevels = {
            1: "Low",
            2: "Medium",
            3: "High",
        };
        return{
            title,
            description,
            dueDate: formatDistanceToNow(dueDate, {addSuffix: true}),   //how long from today?
            priority: priorityLevels[priority], 
            difficulty: difficultyLevels[difficulty],
        }
    }

    const readTask = function(taskList){
        console.log(listManager.toDoLists[taskList]);
    }

    
    const updateTitle = function(task, taskList, title){
        listManager.toDoLists[taskList][task].title = `${title}`;

    }
    const delTask = function(task, taskList){
        listManager.toDoLists[taskList].splice(task, 1);
    }
    
    return{ create, readTask, delTask, updateTitle }
})();