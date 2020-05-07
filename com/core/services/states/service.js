// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var State = require('./model');
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
            if(r.code.toUpperCase() === value.toUpperCase() ) {
                searchResults.push(r);
            }
        }
    }
    return searchResults;
}

const add = (record) => {
    var lr = db.confirmFields(record);
    var nState = new State(lr.id,lr.name,lr.abb,lr.code,lr.active);
    return db.save(core.getData(), core.getPath(), nState.getJSON());
}

const update = (record) => {
    var nState = new State( record.id, record.name, record.abb, record.code, record.active );
    var records = core.getData();
    var ind = db.findRecordIndex(records, nState.getID());
    records[ind].name = nState.getName();
    records[ind].abb = nState.getAbbreviation();
    records[ind].code = nState.getCode();
    records[ind].active = nState.getActive();
    db.writeData(records, core.getPath());
    return nState.getJSON();
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