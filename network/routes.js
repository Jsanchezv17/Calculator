const operations = require('../components/operations/network');

const routes = function (server) {
  server.use('/operation', operations);
}

module.exports = routes;