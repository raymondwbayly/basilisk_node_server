// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var User = require('./model');
var core = require('./index');


const list = () => {
    var records = core.getData();
    return records;
}

const get = (uid) => {
    var records = core.getData();
    return db.get(records, uid);
}

const search = (value) => {
    var records = core.getData();
    var searchResults = [];
    for(let r of records) {
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