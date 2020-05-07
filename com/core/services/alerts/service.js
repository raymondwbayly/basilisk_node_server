// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var Alert = require('./model');
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
    var nAlert = new Alert(lr.id,lr.name,lr.description,lr.assigned, lr.created,lr.complete, lr.status,lr.active);
    return db.save(core.getData(), core.getPath(), nAlert.getJSON());
}

const update = (record) => {
    var nAlert = new Alert( record.id, record.name, record.description, record.assigned, record.created,record.complete, record.status, record.active );
    var records = core.getData();
    var ind = db.findRecordIndex(records, nAlert.getID());
    records[ind].name = nAlert.getName();
    records[ind].description = nAlert.getDescription();
    records[ind].assigned = nAlert.getAssigned();
    records[ind].created = nAlert.getCreated();
    records[ind].complete = nAlert.getComplete();
    records[ind].status = nAlert.getStatus();
    records[ind].active = nAlert.getActive();
    db.writeData(records, core.getPath());
    return nAlert.getJSON();
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