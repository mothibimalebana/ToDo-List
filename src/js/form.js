export const form = (function (){
    function openForm() {
        document.getElementById("dialogForm").showModal()
      }
      
      function closeForm() {
        document.getElementById("dialogForm").close()
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
          else{
            
          }
        }
      }
      return {openForm, closeForm, preventSubmit}
})();