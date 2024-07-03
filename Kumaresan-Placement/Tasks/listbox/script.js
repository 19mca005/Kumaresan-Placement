function addItem() {
    var inputValue = document.getElementById("inputValue").value.trim();
    if (inputValue === "") return;
    var listbox = document.getElementById("listbox");
    listbox.innerHTML += `<option>${inputValue}</option>`;
    localStorage.setItem("items", listbox.innerHTML);
 }
 
 function deleteAll() {
    document.getElementById("listbox").innerHTML = "";
    localStorage.removeItem("items");
 }
 document.addEventListener("DOMContentLoaded", function () {
    var listbox = document.getElementById("listbox");
    var savedItems = localStorage.getItem("items");
    if (savedItems) {
       listbox.innerHTML = savedItems;
    }
 });