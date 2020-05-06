// This is the user service

var db = require('../../controllers/database.controller');
var Task = require('../../../../lib/core/models/Task');
var mod = require('./index');


const list = () => {
    return mod.data;
}

const get = (uid) => {
    let ind =  mod.data.findIndex(x => x.id === uid);
    return mod.data[ind];
}

const search = (value) => {
    return [];
}

const add = (task) => {
    return [];
}

const update = (task) => {
    return [];
}

const remove = (uid) => {
    return [];
}

const active = (uid) => {
    return [];
}

const getTitle = () => {
    return mod.getTitle();
}

const getCategory = () => {
    return mod.getCategory();
}

const getURI = () => {
    return mod.getURI();
}

const getPath = () => {
    return mod.getPath();
}



exports.list = list;
exports.get = get;
exports.search = search;
exports.add = add;
exports.update = update;
exports.remove = remove;
exports.getTitle = getTitle;
exports.getCategory = getCategory;
exports.getURI = getURI;
exports.getPath = getPath;