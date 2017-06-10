/**
 * RapidTabOpener
 * 
 * Action to be executed when toolbar button is clicked. Determines the
 * current window mode and the desired window type then with that
 * information either opens a new window first or the specified URLs.
 *
 * @author cedricium - Cedric Amaya
 */

browser.browserAction.onClicked.addListener(getDataFromStorage);

var urls,
    windowSettings,
    currentWindow;

function getDataFromStorage(window) {
  currentWindow = window;
  
  var getting = browser.storage.local.get(["urls", "windowSettings"]);
  getting.then(determineWindow);
}

function determineWindow(item) {
  urls = item.urls;
  windowSettings = item.windowSettings;
  
  var windowType = windowSettings.type;
  
  if (urls.length <= 0)
    openOptionsPage();
  else {
    if (windowType === "incognito" && currentWindow.incognito)
      openURLs();
      
    if (windowType === "incognito" && !currentWindow.incognito)
      openWindow(windowType);
      
    if (windowType === "normal" && !currentWindow.incognito)
      openURLs();
    
    if (windowType === "normal" && currentWindow.incognito)
      openWindow(windowType);
  }
}

function openOptionsPage() {
  browser.runtime.openOptionsPage();
  
  browser.notifications.create({
    "type": "basic",
    "title": "Zoinks!",
    "message": "Add some URLs that you want opened.",
    "iconUrl": "icons/tabs-128.png"
  });
}

function openWindow(type) {
  var newWindow;
  
  if (type === "normal") {
    newWindow = browser.windows.create({
      incognito: false,
      state: "maximized"
    });
  }

  else if (type === "incognito") {
    newWindow = browser.windows.create({
      incognito: true,
      state: "maximized"
    });
  }
  
  newWindow.then(openURLs);
}

function closeNewTab(tabs) {
  var newTab = tabs[tabs.length - 1];
  var removingNewTab = browser.tabs.remove(newTab.id);
}

function openURLs() {
  var querying = browser.tabs.query({currentWindow: true});
  querying.then(closeNewTab);
  
  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    
    browser.tabs.create({
      index: i,
      url: url
    });
  }
}