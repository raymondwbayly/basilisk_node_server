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

const getTitle = () => {
    return settings.title;
}

const getCategory = () => {
    return settings.category;
}

const getURI = () => {
    return settings.uri;
}

const getPath = () => {
    return settings.path;
}

const getData = () => {
    return data;
}

const getModel = () => {
    return model;
}

const getService = () => {
    return service;
}

const getRoutes = () => {
    return routes;
}

const saveData = (records) => {
    fs.writeFileSync(getPath(), JSON.stringify(records));
    return true;
}



exports.getTitle = getTitle;
exports.getCategory = getCategory;
exports.getURI = getURI;
exports.getPath = getPath;
exports.getRoutes = getRoutes;
exports.getService = getService;
exports.getModel = getModel;
exports.getData = getData;
exports.saveData = saveData;