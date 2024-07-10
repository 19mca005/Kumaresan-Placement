document.addEventListener("DOMContentLoaded", () => {
   const list = document.getElementById("listbox");
   list.innerHTML = localStorage.items || '';
   list.addEventListener('click', e => {
       if (e.target.classList.contains('cancel-icon')) {
           e.target.parentElement.remove();
           localStorage.items = list.innerHTML;
       }
   });
});

const addItem = () => {
   const value = document.getElementById("inputValue").value.trim();
   if (value) {
       const list = document.getElementById("listbox");
       list.insertAdjacentHTML('beforeend', `<li><span>${value}</span><span class="cancel-icon">&#x2716;</span></li>`);
       document.getElementById("inputValue").value = '';
       localStorage.items = list.innerHTML;
   }
};

const removeItem = el => {
   el.parentElement.remove();
   localStorage.items = document.getElementById("listbox").innerHTML;
};

const deleteAll = () => {
   document.getElementById("listbox").innerHTML = '';
   localStorage.removeItem("items");
};
