browser.browserAction.onClicked.addListener(openTabs);

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