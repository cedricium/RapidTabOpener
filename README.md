## About

Firefox Webextension that allows you to open all the websites you want with one click of a button. Stop wasting time opening tab after tab and typing out each URL everyday and instead let *RapidTabOpener* do the work for you!

### Features :star:

- select the window type you want your tabs opened in (normal or incognito)
- easily add, edit, remove, and save URLs by accessing the Options page
- context menu options to add a website and open Options page with no need to type anything

## Getting Started

### Install :arrow_down:

Click the badge below to download the latest version of *RapidTabOpener*.

<p align="left">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/rapidtabopener/">
    <img src="https://raw.githubusercontent.com/cedricium/RapidTabOpener/settings-page/res/ff_badge.png" width="25%"/>
  </a>
</p>

### Setup  :nut_and_bolt:

~~1. After installation is complete, direct to "about:addons" then select "Extensions"~~
~~2. Select "Preferences" (Mac) or "Options" (Windows) for RapidTabOpener~~
1. After installation is complete, click the toolbar button (looks like <img src="https://raw.githubusercontent.com/cedricium/RapidTabOpener/master/icons/icon_action.png" width="22" height="22" alt="tabs icon" />) to be directed immediately to the Options page. [NEW IN `v1.2.3`]
2. Select what type of window you want the tabs opened in:
    - Normal
    - Incognito
3. Select "Add" to add an input field for the URL you want opened
    - Note: no need for the "http://", but if you're experiencing problems with opening a specific URL try adding it to the input field.
4. Once you have added the URLs you want opened, select "Save"

Now try it out! Click the <img src="https://raw.githubusercontent.com/cedricium/RapidTabOpener/master/icons/icon_action.png" width="22" height="22" alt="tabs icon" /> icon in the toolbar menu and watch as the URLs you've added open magically. Window preference and URLs will be saved even after all browser windows have been closed so you only need to add them once.

### Permissions :warning:

*RapidTabOpener* uses several permissions to work. What they are and why they're needed is below.

- `contextMenus`: this is an awesome one, I promise! This is used to create, well, a context menu. Right clicking anywhere on the page or tab will allow you access to the "RapidTabOpener" context menu option, which contains two suboptions: adding the current site and opening the Options Page.
- `notifications`: used to create the notification when the toolbar button is pressed but no URLs have been specified. `window.alert()` is not allowed for Firefox Webextensions so `notifications` has been used in it's place.
- `storage`: specifically `storage.local` - used to store the URLs and window-type preference even after Firefox has been closed. Data is not collected or sent anywhere, see `background.js` and `settings.js` for how storage is being handled.
- `tabs`: used to create the new tabs for the user's desired URLs.

## Special Thanks
Icons made by Alyssa Clayton ([https://aclayton7464.wixsite.com/portfolio](https://aclayton7464.wixsite.com/portfolio)).
