# Reference -

// Function to add an item to the listbox and persist it
function addItem() {
    var inputValue = document.getElementById("inputValue").value.trim();
    if (inputValue === "") return;
    var listbox = document.getElementById("listbox");
    listbox.innerHTML += `<option>${inputValue}</option>`;
    localStorage.setItem("items", listbox.innerHTML);
 }
 
 // Function to delete all added items and update localStorage
 function deleteAll() {
    document.getElementById("listbox").innerHTML = "";
    localStorage.removeItem("items");
 }
 
 document.addEventListener("DOMContentLoaded", function () {
    var listbox = document.getElementById("listbox");
 
    // Retrieve items from localStorage and add them to listbox
    var savedItems = localStorage.getItem("items");
    if (savedItems) {
       listbox.innerHTML = savedItems;
    }
 });