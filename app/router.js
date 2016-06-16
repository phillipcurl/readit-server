/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-15T21:38:35-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-16T19:22:42-04:00
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


  /* generator: end imports */

  router.route('/').use(IndexController);

  /* generator: begin routes */


  /* generator: end routes */

  return router;

})();
