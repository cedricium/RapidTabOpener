# RapidTabOpener <img src="https://raw.githubusercontent.com/cedricium/RapidTabOpener/master/icons/tabs-64.png" width="32" height="32" alt="tabs icon" />

Firefox Webextension that allows you to open all the websites you want with one click of a button. Stop wasting time opening tab after tab and typing out each URL everyday and instead let RapidTabOpener do the work for you!

### Features:

- select the window type you want your tabs opened in (normal or incognito)
- easily add, edit, remove, and save URLs by accessing the Options page

## Getting Started

### Install

Visit [https://addons.mozilla.org/en-US/firefox/addon/rapidtabopener/](https://addons.mozilla.org/en-US/firefox/addon/rapidtabopener/) and select "Add to Firefox".

### Setup

1. In your browser, direct to [about:addons](about:addons) and select "Preferences" or "Options" for RapidTabOpener
2. Select what type of window you want the tabs to opened in:
  - Normal
  - Incognito
3. Select "Add" to add an input field for the URL you want opened
  - Note: no need for the "http://", but if you're experiencing problems with opening a specific URL try adding it to the input field.
4. Once you have added the URLs you want opened, select "Save"

Now try it out! Click the <img src="https://raw.githubusercontent.com/cedricium/RapidTabOpener/master/icons/tabs-64.png" width="24" height="24" alt="tabs icon" /> icon in the toolbar menu and watch as the URLs you've added open magically. Window preference and URLs will be saved even after all browser windows have been closed so you only need to add them once.

## Permissions

RapidTabOpener uses several permissions to work. What they are and why they're needed is below.

- `notifications`: used to create the notification when the toolbar button is pressed but no URLs have been specified. `window.alert()` is not allowed for Firefox Webextensions so `notifications` has been used in it's place.
- `storage`: specifically `storage.local` - used to store the URLs and window-type preference even after Firefox has been closed. Data is not collected or sent anywhere, see `background.js` and `settings.js` for how storage is being handled.
- `tabs`: used to create the new tabs for the user's desired URLs.

## Special Thanks
Icons made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com). www.flaticon.com is licensed by [Creative Commons BY 3.0 CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).