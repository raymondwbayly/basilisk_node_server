// This is the index file that loads the others for the service
const routes = require('./auth.route')
const service = require('./auth.service');

exports.routes = routes;
exports.service = service;