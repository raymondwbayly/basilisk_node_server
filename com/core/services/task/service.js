// This is the user service

var db = require('../../controllers/database.controller');
var Task = require('../../../../lib/core/models/Task');
var core = require('./index');


const list = () => {
    return core.getData();
}

const get = (uid) => {
    let ind =  core.getData().findIndex(x => x.id === uid);
    return core.getData()[ind];
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



exports.list = list;
exports.get = get;
exports.search = search;
exports.add = add;
exports.update = update;
exports.remove = remove;