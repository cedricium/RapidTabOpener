/**
 * RapidTabOpener
 * 
 * Content script for the options page. Contains all the event listeners
 * for the various inputs located on the page. Also handles getting
 * and setting the data stored in storage.local to display properly.
 *
 * @author cedricium - Cedric Amaya
 */

var URLplaceholder = document.getElementById("urls");  

// Add button functionality
function add() {
  var span = document.createElement("span");
  
  var field = document.createElement("input");
  field.setAttribute("type", "url");
  field.setAttribute("name", "url");
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
var windowSettings;

// Save button functionality
function save() {
  var windowSettings = getWindowSettings();
  
  var inputs = document.getElementsByName("url");
  for (var i = 0; i < inputs.length; i++) {
    // disables editing of input fields
    inputs[i].disabled = true;
    
    if (inputs[i].value !== urls[i])
      urls[i] = inputs[i].value;
  }
  
  removeEmptyFields();
  
  validateURLs();
  
  browser.storage.local.set({
    urls,
    windowSettings
  });
}

function removeEmptyFields() {
  var spans = document.getElementsByTagName("span");
  
  for (var i = 0; i < spans.length; i++) {
    var span = spans.item(i);
    
    if (span.firstChild.value == "") {
      removeURL(span);
      i--;
    }
  }
}

function validateURLs() {
  for (var i = 0; i < urls.length; i++) {
    if (!urls[i].startsWith("http"))
      urls[i] = "http://" + urls[i];
  }
}

function getWindowSettings() {
  var windowTypeRB = document.getElementsByName("window-type"),
      windowType;
  
  for (var i = 0; i < windowTypeRB.length; i++) {
  	if (windowTypeRB[i].checked)
    	windowType = windowTypeRB[i].value;
    else
    	continue;
  }
  
  var windowSettings = {
    type: windowType
  }
  
  return windowSettings;
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
    
  URLplaceholder.removeChild(span);
  
  browser.storage.local.set({urls});
}

function loadSavedData(item) {
  var savedURLs = item.urls,
      savedWindowSettings = item.windowSettings,
      inputs = document.getElementsByName("url"),
      windowTypeRB = document.getElementsByName("window-type");
  
  if (savedWindowSettings.type === "normal")
    windowTypeRB[0].checked = true;
  else if (savedWindowSettings.type === "incognito")
    windowTypeRB[1].checked = true;
  
  for (var i = 0; i < savedURLs.length; i++) {
    add();
    inputs[inputs.length - 1].value = savedURLs[i];
    save();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var savedData = browser.storage.local.get(["urls", "windowSettings"]);
  
  savedData.then(loadSavedData);
});


// Listens for keyup events in the 'body' of the page;
// if keycode == 13 ('Enter' key), triggers the click event for
// the 'Save' button
document.querySelector("body").addEventListener("keyup", function(event) {
  if (event.keyCode == 13)
    document.getElementById("save").click();
});

// Safety Measure - if page is closed before user saves, input fields
// currently enabled will be saved
window.onbeforeunload = save;

// onMessage listener from background.js that updates open Options page
// when a website is added via the context menu - see #10
browser.runtime.onMessage.addListener((message) => {
  var savedData = browser.storage.local.get(["urls"]);

  savedData.then((item) => {
    var savedURLs = item.urls,
        inputs = document.getElementsByName("url"),
        latestURL = '';

    latestURL = savedURLs[savedURLs.length - 1];

    add();
    inputs[inputs.length - 1].value = latestURL;
    save();
  });
});

browser.runtime.connect();
