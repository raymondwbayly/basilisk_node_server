const path = require('path');
const routes = require('./routes');
const service = require('./service');
const model = require('./model');
let data = require('./data.json');

// Config is the only alteration that you will need to ensure the service works.
const settings = {
    title:'Tasks',
    category:'tasks',
    uri:'/tasks',
    path:path.join(__dirname, './', 'data.json'),
};

exports.settings = settings;
exports.routes = routes;
exports.service = service;
exports.model = model;
exports.data = data;