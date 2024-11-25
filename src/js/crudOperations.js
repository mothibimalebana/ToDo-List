import { formatDistanceToNow } from "date-fns";
import { taskManager } from ".";

export const crudOperations = (function (){     //where crud operations will be defined
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
    const read = function(){
        console.log(taskManager.toDoLists["Default ToDo List"].map((task) => console.log(`\nTitle: ${task.title} \nDifficulty: ${task.difficulty} \nPriotiy: ${task.priority} \nDate: ${task.dueDate}`)))
    }
    const update = function(){

    }
    
    return{ create, read }
})();