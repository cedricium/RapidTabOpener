/* eslint-disable no-undef */
import store from './store/store';

browser.runtime.onInstalled.addListener((details) => {
  switch (details.reason) {
    case 'install':
      break;
    case 'update':
      browser.storage.local.get().then((data) => {
        // check if < v1.4.5 data exists in localStorage...
        if (data.urls && data.windowSettings) {
          const sanitizedUrls = data.urls.map((url) => { return url.startsWith('http') ? url : `http://${url}`; });
          // if so, migrate to a `Default` group using Vuex store
          store.commit('ADD_GROUP', {
            color: 'rgb(255, 59, 48)',
            name: 'Default',
            tabs: sanitizedUrls,
            windowSettings: {
              location: 'current',
              type: data.windowSettings.type,
            }
          });
          // afterwards, cleanup old localStorage data so
          // new groups will no longer be created
          browser.storage.local.clear();
        }
      });
      break; 
  }
});
