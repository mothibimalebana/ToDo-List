export const crudOperations = (function (){
    //where crud operations will be defined
    const createTask = function (title, description, dueDate, priority) {   //create tasks
        return{
            title,
            description,
            dueDate,
            priority,
        }
    }
    return{createTask}
})();