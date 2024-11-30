export const form = (function (){
    function openForm() {
        document.getElementById("dialogForm").showModal()
      }
      
      function closeForm() {
        document.getElementById("dialogForm").close()
      }
    
      function preventSubmit(){
        document.getElementById("submit")
      }
      return {openForm, closeForm}
})();