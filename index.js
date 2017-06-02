const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const contentstack = require('contentstack-metalsmith');
const entry_hooks = require('./hooks/entry-hooks');
const post_hooks = require('./hooks/post-hooks');
const permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .source('src')
  .destination('build')
  .clean(true)
  .use(contentstack({
    api_key: '',
    access_token: '',
    environment: process.env.NODE_ENV || 'development',
    partials: ['header', 'footer'],
    entryHooks: {
      remove: function (entries, file, options) {
        return entry_hooks.remove(entries, file, options);
      }
    },
    postHooks: {
      fetchProducts: function (currFile, files, options) {
        return post_hooks.fetchProducts(currFile, files, options);
      }
    }
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(permalinks())
  .build(function (err) {
    if (err) throw err
    console.log('Static site built successfully');
  })