/* eslint-disable no-undef */

import isEqual from 'lodash.isequal';

export default function browserStorageSync () {
  return async store => {
    // upon store initalization, get data in `browser.storage.local`
    const {rtoData} = (await browser.storage.local.get('rtoData'));
    // compare `browser.storage.local` data with store.state's, if they don't match,
    // set the state to the `browser.storage.local` data using `store.replaceState({})`
    // note: this is used to sync private mode windows with the
    if (rtoData !== undefined && !isEqual(rtoData, store.state)) {
      store.replaceState(rtoData);
    }
    // subscribe / watch for store mutations
    store.subscribe((mutation, state) => {
      // update `browser.storage.local` with the new mutated state
      browser.storage.local.set({rtoData: state});
    });
  }
}
