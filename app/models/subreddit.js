module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Subreddit extends Nodal.Model {}

  Subreddit.setDatabase(Nodal.require('db/main.js'));
  Subreddit.setSchema(Nodal.my.Schema.models.Subreddit);

  return Subreddit;

})();
