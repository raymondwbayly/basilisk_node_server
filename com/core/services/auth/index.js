// This is the index file that loads the others for the service
const authRoute = require('./auth.route')
const authService = require('./auth.service');

exports.authRoute = authRoute;
exports.authService = authService;