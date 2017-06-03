/**
 * RapidTabOpener
 * 
 * Action to be executed when toolbar button is clicked. Determines the
 * current window mode and from there will either immediately open
 * the desired tabs or first open a new incognito window then open
 * the tabs.
 *
 * @author Cedric Amaya
 */

browser.browserAction.onClicked.addListener(executeByWindowType);

/**
 * Determines the current window's mode (incognito or not) and with
 * that information, will either execute the openTabs() method or
 * close current window and execute the openIncognitoWindow() method.
 */
function executeByWindowType(window) {
  // debugging window object
  console.log(window);
  
  // debugging window mode
  console.log(window.incognito);
  
  // if current window is incognito, just open desired tabs
  if (window.incognito === true)
    openTabs();
  
  // if current window is not incognito, do the following...
  else {
    // current window is not incognito, so it gets closed
    var closeWindow = browser.windows.remove(window.windowId);
    
    openIncognitoWindow();
  }
}

/**
 * Opens a new incognito window then populates tabs using the
 * openTabs() method.
 */
function openIncognitoWindow() {
  // new incognito window is opened - a Promise is returned
  var incognitoWindow = browser.windows.create({
    incognito: true,
    state: "maximized"
  });

  // once Promise (which returns a Window object) is fulfilled,
  //    openTabs() method is triggered in new incognito window
  incognitoWindow.then(openTabs);
}

/**
 * Creates a series of tabs with websites most used by myself
 * at work.
 */
function openTabs() {  
  var a = browser.tabs.create({
        active: true,
        index: 0,
        url: "https://workforcenow.adp.com"
      }),
      
      b = browser.tabs.create({
        active: false,
        index: 1,
        url: "https://gmail.com"
      }),
      
      c = browser.tabs.create({
        active: false,
        index: 2,
//        url: " TESTRAILS URL HERE "
      }),

      d = browser.tabs.create({
        active: false,
        index: 3,
        url: "http://jira.surfcrew.com"
      });
}