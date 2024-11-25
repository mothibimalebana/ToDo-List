import { formatDistanceToNow } from "date-fns";

export const crudOperations = (function (){     //where crud operations will be defined
//create a task object
    const createTask = function (title, description, dueDate, priority) {   //create tasks
        
        return{
            title,
            description,
            dueDate: formatDistanceToNow(dueDate, {addSuffix: true}),   //how long from today?
            priority,
        }
    }
    return{createTask}
})();