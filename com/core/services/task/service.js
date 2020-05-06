// This is the user service

var db = require('../../controllers/database.controller');
var Task = require('../../../../lib/core/models/Task');
var tModule = require('./index');

const getURI = () => {
    return tModule.settings.uri;
}

const getCategory = () => {
    return tModule.settings.category;
}

const getData = () => {
    return tModule.data;
}



exports.getURI = getURI;
exports.getCategory = getCategory;
exports.getData = getData;