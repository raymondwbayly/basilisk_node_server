// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var Task = require('../../../../lib/core/models/Task');
var core = require('./index');


const list = () => {
    var localData = core.getData();
    return localData;
}

const get = (uid) => {
    var localData = core.getData();
    return db.get(localData, uid);
}

const search = (value) => {
    var localData = core.getData();
    var searchResults = [];
    for(let r of localData) {
        if(r.name !== undefined){
            if(r.name.toUpperCase() === value.toUpperCase() ) {
                searchResults.push(r);
            }
        }
    }
    return searchResults;
}

const add = (record) => {
    return db.save(core.getData(), core.getPath(), record);
}

const update = (record) => {
    var localData = core.getData();
    return [];
}

const remove = (uid) => {
    var localData = core.getData();
    return [];
}

const active = (uid) => {
    var localData = core.getData();
    return [];
}



exports.list = list;
exports.get = get;
exports.search = search;
exports.add = add;
exports.update = update;
exports.remove = remove;