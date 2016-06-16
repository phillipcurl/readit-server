/**
* @Author: Phillip Curl <PC>
* @Date:   2016-06-15T21:38:35-04:00
* @Email:  phillipcurl@gmail.com
* @Project: Libations-Portal
* @Last modified by:   PC
* @Last modified time: 2016-06-15T21:42:41-04:00
*/

module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');
  const cluster = require('cluster');

  if (cluster.isMaster) {

    const daemon = Nodal.require('app/daemon.js');
    daemon.start(Nodal.my.Config.secrets.port);

  } else {

    const app = new Nodal.Application();
    app.listen(Nodal.my.Config.secrets.port);

  }

})();
