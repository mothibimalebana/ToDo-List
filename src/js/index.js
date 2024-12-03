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
        return task
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
    const getCurrList = () => currList;
    const listTitle = document.querySelector(".taskTitle");
    const updateListTitle = () =>{
    listTitle.textContent = `${getCurrList()}`;
    }

    const createListItem = (listName) => {
        const list = document.querySelector(".lists");

        const listItem = document.createElement("div");
        listItem.classList.add("listItems");
    
        const listHeader = document.createElement("div");
        listHeader.classList.add("listHeader");
        listHeader.textContent = `${listName}`
    
        listItem.appendChild(listHeader);
        list.appendChild(listItem)
    }
    const createTaskItem = (task,date,priority, effort, taskList) => {
        const taskListDiv = document.querySelector(".taskList");
    
        const taskDiv = document.createElement("div");
        taskDiv.classList.add = "task";
    
        const taskHeaderDiv = document.createElement("div");
        taskHeaderDiv.classList.add = "taskHeader";
    }
    const clearList = () => {
        const list = document.querySelector(".lists");
        list.lastElementChild.innerHTML = "";
        list.lastElementChild.remove();
    }

    const displayList = () => {
        let lengthOfList = Object.keys(listManager.getLists()).length - 1;
        for(let i = lengthOfList; i <= lengthOfList; i++){
            createListItem(Object.keys(listManager.getLists())[i]);
        }
    }    
    displayList();
    return{ createListItem, displayList, clearList }
})();

const listFormManager = (function(){
    const list = document.getElementById("list");
    const listForm = document.getElementById("listForm")

    const openListForm = document.getElementById("addList");
    openListForm.addEventListener("click", ()=>formList.openListForm());

    const closeListForm = document.getElementById("closeList");
    closeListForm.addEventListener("click", () => formList.closeListForm());

    const submitListForm = document.getElementById("submitListForm");
    submitListForm.addEventListener("click",() =>{
        formList.preventSubmitList();
        const listItem = listManager.createList(list.value);
        screenController.displayList();        
    })
    listForm.addEventListener("submit", () =>{
        taskFormManager.listOptions();
        console.log("submitted");        
        document.getElementById("listForm").close();
    })
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

    function listOptions(){
        const listFieldSet = document.getElementById("listFieldSet");

        let lengthOfList = Object.keys(listManager.getLists()).length-1;
        for(let i = lengthOfList; i <= lengthOfList; i++){
          const listLabel = document.createElement("label");
          listLabel.setAttribute("for", Object.keys(listManager.getLists())[i]);
          listLabel.textContent = Object.keys(listManager.getLists())[i];
  
          const input = document.createElement("input");
          input.setAttribute("name",  "listItem");
          input.setAttribute("type", "radio");
          input.setAttribute("value",  Object.keys(listManager.getLists())[i]);
          listFieldSet.appendChild(listLabel);
          listFieldSet.appendChild(input);
        }  
      }
    listOptions();
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", ()=>{
        form.preventSubmit();
        const priorityLevel = Number(form.checkedPriority());
        const effortLevel = Number(form.checkedEffort());
        const listItem = form.checkedListItem();
        const newTask = taskManager.createTask(String(task.value), date.value, priorityLevel, effortLevel, String(listItem));
        taskManager.getTasks(String(listItem))
    })

    return {listOptions}
})();
export {taskManager, listManager}