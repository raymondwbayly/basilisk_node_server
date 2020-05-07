// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var Article = require('./model');
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
        if(r.title !== undefined){
            if(r.title.toUpperCase() === value.toUpperCase() ) {
                searchResults.push(r);
            }
        }
    }
    return searchResults;
}

const add = (record) => {
    var lr = db.confirmFields(record);
    var nArticle = new Article(lr.id,lr.title,lr.created,lr.author,lr.category,lr.story,lr.active);
    return db.save(core.getData(), core.getPath(), nArticle.getJSON());
}

const update = (record) => {
    var nArticle = new Article(record.id,record.title,record.created,record.author,record.category,record.story,record.active);
    var records = core.getData();
    var ind = db.findRecordIndex(records, nArticle.getID());
    records[ind].title = nArticle.getTitle();
    records[ind].created = nArticle.getCreated();
    records[ind].author = nArticle.getAuthor();
    records[ind].category = nArticle.getCategory();
    records[ind].story = nArticle.getStory();
    records[ind].active = nArticle.getActive();
    db.writeData(records, core.getPath());
    return nArticle.getJSON();
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