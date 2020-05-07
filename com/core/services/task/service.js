// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var Task = require('./model');
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
    var lr = db.confirmFields(record);
    var nTask = new Task(lr.id,lr.name,lr.description,lr.active);
    return db.save(core.getData(), core.getPath(), nTask.getJSON());
}

const update = (record) => {
    var nTask = new Task(record.id,record.name,record.description,record.active);
    var records = core.getData();
    var ind = db.findRecordIndex(records, nTask.getID());
    records[ind].name = nTask.getName();
    records[ind].description = nTask.getDescription();
    records[ind].active = nTask.getActive();
    db.writeData(records, core.getPath());
    return nTask.getJSON();
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