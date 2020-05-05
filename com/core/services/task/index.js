// This is the index file that loads the others for the service
const routes = require('./task.route')
const service = require('./task.service');

exports.routes = routes;
exports.service = service;