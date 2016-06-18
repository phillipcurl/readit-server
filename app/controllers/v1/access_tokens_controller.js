/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-18T10:57:55-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-18T11:25:43-04:00
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');

  class V1AccessTokensController extends Nodal.Controller {

    create() {

      AccessToken.login(this.params, (err, accessToken) => {

        this.respond(err || accessToken);

      })

    }

    destroy() {

      AccessToken.logout(this.params, (err, accessToken) => {

        this.respond(err || accessToken);

      });

    }

  }

  return V1AccessTokensController;

})();
