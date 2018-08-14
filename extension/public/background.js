/**
 * RapidTabOpener - v2.0.0
 * @author Cedric Amaya (cedricium)
 */

browser.contextMenus.create({
  id: "open_options_page",
  title: "Open Options Page",
  type: "normal",
  contexts: [
    "page",
    "tab"
  ],
  onclick: () => {
    browser.runtime.openOptionsPage();
  }
});

/**
 * Below: RapidTabOpener rewrite (groups feature)
 */

function openTabs(tabs) {
  tabs.forEach((tab, i) => {
    browser.tabs.create({
      index: i,
      url: tab
    });
  });
}

function createWindow(type, tabs) {
  const incognito = type === 'private' ? true : false;
  browser.windows.create({
    incognito: incognito,
    state: 'maximized',
    url: tabs
  });
}

async function handleOpeningTabs(group) {
  const {location, type} = group.windowSettings;
  const requestsIncognito = type === 'private' ? true : false;
  const currentWindow = (await browser.windows.getCurrent());

  if (currentWindow.incognito !== requestsIncognito || location === 'new') {
    if (group.tabs.length !== 0) {
      await createWindow(type, group.tabs);
    }
  } else {
    openTabs(group.tabs);
  }
}

function handleMessage(request, sender, sendResponse) {
  switch (request.action) {
    case 'open':
      handleOpeningTabs(request.group);
      break;
    default:
      break;
  }
}

browser.runtime.onMessage.addListener(handleMessage);
