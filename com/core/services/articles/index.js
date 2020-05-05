// This is the index file that loads the others for the service
const routes = require('./article.route')
const service = require('./article.service');

exports.routes = routes;
exports.service = service;