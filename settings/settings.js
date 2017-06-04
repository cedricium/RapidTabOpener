var urls = document.getElementById("urls");  

// Add button functionality
function add() {
  var span = document.createElement("span");
  
  var field = document.createElement("input");
  field.setAttribute("type", "url");
  field.setAttribute("placeholder", "Enter URL");
  
  var edit = document.createElement("button");
  edit.innerHTML += "Edit";
  
  var remove = document.createElement("button");
  remove.setAttribute("id", "removeButton");
  remove.innerHTML += "Remove";
  
  var spacing = document.createElement("br");
  
  var newURL = [
    field,
    edit,
    remove,
    spacing
  ];
  
  for (var i = 0; i < newURL.length; i++)
    span.appendChild(newURL[i]);
  
  urls.appendChild(span);
  
  edit.addEventListener("click", function() {
    editURL(field);
  }, false);
  
  remove.addEventListener("click", function() {
    removeURL(span);
  }, false);
}

document.getElementById("add").addEventListener("click", add);


// Save button functionality
function save() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}

document.getElementById("save").addEventListener("click", save);

// Edit button functionality
function editURL(field) {
  var input = field;
  
  input.disabled = false;
}

// Remove button functionality
function removeURL(span) {
  urls.removeChild(span);
}