import { formatDistance, formatDistanceToNow, subDays } from "date-fns";

export const crudOperations = (function (){

    //where crud operations will be defined
    const createTask = function (title, description, dueDate, priority) {   //create tasks

        return{
            title,
            description,
            dueDate: formatDistanceToNow(dueDate, {addSuffix: true}),
            priority,
        }
    }
    return{createTask}
})();