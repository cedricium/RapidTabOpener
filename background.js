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
  if (Object.keys(item).length == 0)
    openOptionsPage();
  else {
    urls = item.urls;
    windowSettings = item.windowSettings;
  }
  
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
  
  var title = "Oops!",
      message = "Add some URLs that you want opened.";
  
  createNotification(title, message);
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



browser.contextMenus.create({
  id: "add_page",
  title: "Add Page to RapidTabOpener",
  type: "normal",
  contexts: [
    "page",
    "tab"
  ],
  onclick: listener
});

browser.contextMenus.create({
  id: "open_options_page",
  title: "Open Options Page",
  type: "normal",
  contexts: [
    "page",
    "tab"
  ],
  onclick: listener
});

function listener(info, tab) {
  if (info.menuItemId == "open_options_page")
    browser.runtime.openOptionsPage();
  
  else {  // for handling the add_page context
    var getting = browser.storage.local.get(["urls"]);

    getting.then(function(item) {
      addURL(info, item);
    });
  }
}

function addURL(info, item) {
  console.log(item.urls);
  
  var urls = item.urls,
      urlToAdd = info.pageUrl;
  
  urls.push(urlToAdd);
  
  browser.storage.local.set({ urls });
  
  var title = "Website Added!",
      message = 'The following URL was added to your RapidTabs: "' +
        urlToAdd + '".';
  
  createNotification(title, message);
}

function createNotification(heading, message) {
  browser.notifications.create({
    "type": "basic",
    "title": heading,
    "message": message,
    "iconUrl": "icons/icon-128.png"
  });
}