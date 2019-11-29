// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//gridsome.config.js
module.exports = {
  siteName: 'DJ Statik',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'music/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : ['Youtube', 'Twitter', 'Soundcloud'],
            }]
          ]
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
