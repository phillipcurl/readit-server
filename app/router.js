/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-15T21:38:35-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-18T12:40:37-04:00
*/

module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  /* Middleware */
  /* executed *before* Controller-specific middleware */

  const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
  // const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
  // const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
  // const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

  router.middleware.use(CORSMiddleware);
  // router.middleware.use(CORSAuthorizationMiddleware);
  // router.middleware.use(ForceWWWMiddleware);
  // router.middleware.use(ForceHTTPSMiddleware);

  /* Renderware */
  /* executed *after* Controller-specific renderware */

  const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

  router.renderware.use(GzipRenderware);

  /* Routes */

  const IndexController = Nodal.require('app/controllers/index_controller.js');

  /* generator: begin imports */

  const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');
  const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
  const V1SubredditsController = Nodal.require('app/controllers/v1/subreddits_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);

  /* generator: begin routes */

  router.route('/v1/access_tokens/{id}').use(V1AccessTokensController);
  router.route('/v1/users/{id}').use(V1UsersController);
  router.route('/v1/subreddits/{id}').use(V1SubredditsController);

  /* generator: end routes */

  return router;

})();
