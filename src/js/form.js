import { listManager } from "./index";

export const form = (function (){
    function openForm() {
        document.getElementById("addTask").addEventListener("click", () => {
          document.getElementById("dialogForm").showModal();
        })
      }
      
      function closeForm() {
        document.getElementById("closeTask").addEventListener("click", () => {
          document.getElementById("dialogForm").close();
        })
      }
    
      function preventSubmit(){
        document.getElementById("form").addEventListener("submit", (e)=>e.preventDefault(), false)
      }
    

      function checkedPriority(){
        const priorityNodeList = document.getElementsByName("priority");
        for(let i = 0; i < priorityNodeList.length; i++){
          if(priorityNodeList[i].checked){
            return priorityNodeList[i].value
          }
        }
      }
      function checkedEffort(){
        const effortNodeList = document.getElementsByName("effort");
        for(let i = 0; i < effortNodeList.length; i++){
          if(effortNodeList[i].checked){
            return effortNodeList[i].value
          }
        }
      }
      return {openForm, closeForm, checkedEffort, checkedPriority, preventSubmit}
})();
//controls open and closing of the form that will add tasks to list
export const formList =  (function(){
  function openListForm(){
    document.getElementById("addList").addEventListener("click", () => {
      document.getElementById("listForm").showModal();
    });
  }
  function closeListForm(){
    document.getElementById("closeList").addEventListener("click", () => {
      document.getElementById("listForm").close();
    });
  }
  function preventSubmitList(){
    document.getElementById("listForm").addEventListener("submit", (e) => e.preventDefault(), false);
  }

  return{openListForm, closeListForm, preventSubmitList}
})();
