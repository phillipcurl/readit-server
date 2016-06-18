/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-15T21:38:35-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-18T11:18:54-04:00
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  const AccessToken = Nodal.require('app/models/access_token.js');

  class AuthController extends Nodal.Controller {

    authorize(callback) {

      this.setHeader('Cache-Control', 'no-store');
      this.setHeader('Pragma', 'no-cache');

      AccessToken.verify(this.params, (err, accessToken, user) => {

        if (err) {
          this.respond(err);
        }

        callback(accessToken, user);

      });

    }

  }

  return AuthController;

})();
