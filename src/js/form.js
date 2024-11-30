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
      return {openForm, closeForm, preventSubmit}
})();