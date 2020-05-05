// This is the index file that loads the others for the service
const routes = require('./user.route')
const service = require('./user.service');

exports.routes = routes;
exports.service = service;