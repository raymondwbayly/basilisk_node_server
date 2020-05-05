// This is the index file that loads the others for the service
const categoryRoutes = require('./category.route')
const categoryService = require('./category.service');

exports.categoryRoutes = categoryRoutes;
exports.categoryService = categoryService;