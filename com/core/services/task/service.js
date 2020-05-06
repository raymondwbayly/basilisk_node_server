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
    var records = core.getData();
    var ind = db.findRecordIndex(records, record.id);
    records[ind].name = record.name;
    records[ind].description = record.description;
    records[ind].active = record.active;
    db.writeData(records, core.getPath());
    return record;
}

const remove = (uid) => {
    return db.remove(core.getData(), uid);
}

const active = (uid) => {
    return db.checkActive(core.getData(), uid, core.getPath());
}



exports.list = list;
exports.get = get;
exports.search = search;
exports.add = add;
exports.update = update;
exports.remove = remove;
exports.active = active;