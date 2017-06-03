browser.browserAction.onClicked.addListener(executeByWindowType);

function determineWindowMode() {
  var window = browser.windows.getCurrent();
  return window;
}

function executeByWindowType(window) {
  
  // debugging window mode
  console.log(window.incognito);
  
  if (window.incognito === true)
    openTabs();
  else  // window is not in incognito mode, so open incognito window
    
    /* TODO:
     *   - create object of tabs to create
     *   - pass above object to window.create to open tabs
     */
    
    // debugging
//    var incognitoWindow = browser.windows.create({
//      url: [
//        "https://gmail.com",
//        "https://facebook.com"
//      ],
//      incognito: true,
//      state: "maximized"
//    });
}

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