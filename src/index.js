const taskManager = (function (){
    //where user tasks will be stored
    const todoList = []

})();
const crudOperations = (function (){
    //where crud operations will be defined
    const createTask = function (title, description, dueDate, priority) {
        return{
            title,
            description,
            dueDate,
            priority,
        }
    }
   const task1 =  createTask("climb a tree", "check maths building for good trees to climb", "today", 1);
})();
const todoOperations = (function (){
    //exta functionalities will be added here
})();