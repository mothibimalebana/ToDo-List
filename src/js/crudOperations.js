import { formatDistanceToNow } from "date-fns";
import { taskManager } from ".";

export const crudOperations = (function (){     //where crud operations will be defined
//create a task object
    const create = function (title, description, dueDate, priority, difficulty) {   //create tasks
        
        return{
            title,
            description,
            dueDate: formatDistanceToNow(dueDate, {addSuffix: true}),   //how long from today?
            priority: {
                1: "low priori"
            }
        }
    }
    const read = function(){
        console.log(taskManager.toDoLists)
    }
    return{ create, read }
})();