/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-18T10:53:30-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-18T12:39:02-04:00
*/



module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class V1UsersController extends Nodal.Controller {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      User.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      User.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      User.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      User.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1UsersController;

})();
