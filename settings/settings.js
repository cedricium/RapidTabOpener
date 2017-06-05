var URLplaceholder = document.getElementById("urls");  

// Add button functionality
function add() {
  var span = document.createElement("span");
  
  var field = document.createElement("input");
  field.setAttribute("type", "url");
  field.setAttribute("placeholder", "http://");
  
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
  
  URLplaceholder.appendChild(span);
  
  edit.addEventListener("click", function() {
    editURL(field);
  }, false);
  
  remove.addEventListener("click", function() {
    removeURL(span);
  }, false);
}

document.getElementById("add").addEventListener("click", add);

var urls = [];

// Save button functionality
function save() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    // disables editing of input fields
    inputs[i].disabled = true;
    
    if (inputs[i].value !== urls[i])
      urls[i] = inputs[i].value;
  }
  
  validateURLs();
  
  browser.storage.local.set({urls});
}

function eliminateDuplicates(arr) {
  var i,
      len = arr.length,
      out = [],
      obj = {};
  
  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  
  for (i in obj) {
    out.push(i);
  }
  
  return out;
}

function validateURLs() {
  for (var i = 0; i < urls.length; i++) {
    if (!urls[i].startsWith("http"))
      urls[i] = "http://" + urls[i];
    
    console.log(urls[i]);
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
  // value of input field, aka the URL
  var urlToRemove = span.firstChild.value,
      // position in urls[] that URL is located
      index = urls.indexOf(urlToRemove);
  
  urls.splice(index, 1);
  
  console.log(urls);
  
  URLplaceholder.removeChild(span);
  
  browser.storage.local.set({urls});
}

function loadSavedURLs(item) {
  var savedURLs = item.urls,
      inputs = document.getElementsByTagName("input");
  
  for (var i = 0; i < savedURLs.length; i++) {
    add();
    
    console.log("Number of input fields: " + inputs.length);
    console.log(savedURLs[i]);
    
    console.log("Last input field: " + (inputs.length - 1).value);
    inputs[inputs.length - 1].value = savedURLs[i];
    
    save();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var savedURLs = browser.storage.local.get("urls");
  savedURLs.then(loadSavedURLs);
});