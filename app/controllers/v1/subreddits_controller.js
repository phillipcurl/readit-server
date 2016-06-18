/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-18T10:34:04-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-18T12:38:52-04:00
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Subreddit = Nodal.require('app/models/subreddit.js');

  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1SubredditsController extends AuthController {

    index() {

      Subreddit.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Subreddit.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      this.authorize((accessToken, user) => {

        this.params.body.data.user_id = user.get('id');

        Subreddit.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });

    }

    update() {

      Subreddit.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Subreddit.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1SubredditsController;

})();
