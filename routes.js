const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new')
  .add('/campaigns/:address', '/campaigns/show')

module.exports = routes;