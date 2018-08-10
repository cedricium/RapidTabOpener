/**
 * Sources: + https://cli.vuejs.org/config/#pages
 *          + https://cli.vuejs.org/guide/html-and-static-assets.html#building-a-multi-page-app
 */

module.exports = {
  filenameHashing: false,
  pages: {
    options: {
      entry: 'src/views/options/main.js',
      template: 'public/pages/options/index.html',
      filename: 'options/index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Settings Page',
    },
    popup: {
      entry: 'src/views/popup/main.js',
      template: 'public/pages/popup/index.html',
      filename: 'popup/index.html',
    },
    migrate: {
      entry: 'src/migrate.js',
      template: 'public/background.html',
      filename: 'background.html'
    }
  }
};
