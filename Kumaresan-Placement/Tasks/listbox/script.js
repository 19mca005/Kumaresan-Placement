function addItem() {
    // Get input value
    var inputValue = document.getElementById("inputValue").value.trim();

    // Check if input value is not empty
    if (inputValue !== "") {
        // Create a new option element
        var option = document.createElement("option");
        option.text = inputValue;

        // Add the option to the select element (listbox)
        var listbox = document.getElementById("listbox");
        listbox.appendChild(option);

        // Clear the input textbox
        document.getElementById("inputValue").value = "";
    }
}