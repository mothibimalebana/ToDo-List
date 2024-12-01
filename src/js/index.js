import { crudTaskOperations } from "./crudTaskOperations";
import { crudListOperations } from "./crudListOperations";
import {todoOperations} from "./toDoOperations";
import { form } from "./form";
import { formList } from "./form";
import "../css/styles.css";

const taskManager = (function (){
    //where user tasks will be stored
    const createTask = function(title, dueDate, priority, difficulty, taskList){
        const task = crudTaskOperations.create(title, dueDate, difficulty, priority);
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

const listManager = (function(){
    //where user lists will be stored
    const toDoLists = {
        ["Default"]: [],
    }
    const createList = function(title){
       return crudListOperations.createList(title)
    }
    const getLists = function(){
        return crudListOperations.readList();
    }
    const updateTitle = function(listName ,title){
        return crudListOperations.updateTitle(listName,title);
    }
    const removeLists = function(taskList){
       return crudListOperations.delList( taskList );
    }
    return{ toDoLists,  getLists, createList, removeLists, updateTitle }
})();

const screenController = (function (){
    let currList = "Default";
    const getCurrList = ()=>currList;
    const listTitle = document.querySelector(".taskTitle");

    listTitle.textContent = `${getCurrList()}`;
    currList = "Default";
    console.log(listTitle)
})();

const listFormManager = (function(){
    const openListForm = document.getElementById("addList");
    openListForm.addEventListener("click", ()=>formList.openListForm())

    const closeListForm = document.getElementById("closeList")
})();

const taskFormManager = (function (){
    const task = document.getElementById("task");
    const date = document.getElementById("date");
    const priority = document.getElementById("priority");
    const effort = document.getElementById("effort");

    const addTask = document.getElementById("addTask");
    addTask.addEventListener("click", ()=> form.openForm());

    const closeTask = document.getElementById("closeTask");
    closeTask.addEventListener("click", ()=>form.closeForm());

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", ()=>{
        form.preventSubmit();
        const priority = form.checkedPriority();
        const effort = form.checkedEffort();

        const newTask = taskManager.createTask(task.value, date.value, priority, effort,)
        // let task = taskManager.createTask(task)
    })
})();
export {taskManager, listManager}