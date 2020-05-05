// This is the index file that loads the others for the service
const articleRoutes = require('./article.route')
const articleService = require('./article.service');

exports.articleRoutes = articleRoutes;
exports.articleService = articleService;