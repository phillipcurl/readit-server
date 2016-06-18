module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateSubreddits extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016061814330340;
    }

    up() {

      return [
        this.createTable("subreddits", [])
      ];

    }

    down() {

      return [
        this.dropTable("subreddits")
      ];

    }

  }

  return CreateSubreddits;

})();
