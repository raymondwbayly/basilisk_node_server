// This is the index file that loads the others for the service
const userRoutes = require('./user.route')
const userService = require('./user.service');

exports.userRoutes = userRoutes;
exports.userService = userService;