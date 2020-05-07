// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var Category = require('./model');
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
    var nCategory = new Category(lr.id,lr.name,lr.description,lr.active);
    return db.save(core.getData(), core.getPath(), nCategory.getJSON());
}

const update = (record) => {
    var nCategory = new Category(record.id,record.name,record.description,record.active);
    var records = core.getData();
    var ind = db.findRecordIndex(records, nCategory.getID());
    records[ind].name = nCategory.getName();
    records[ind].description = nCategory.getDescription();
    records[ind].active = nCategory.getActive();
    db.writeData(records, core.getPath());
    return nCategory.getJSON();
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