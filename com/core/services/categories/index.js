// This is the index file that loads the others for the service
const routes = require('./category.route')
const service = require('./category.service');

exports.routes = routes;
exports.service = service;