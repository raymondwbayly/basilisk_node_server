// This is the user service
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var db = require('../../controllers/database');
var User = require('./model');
var core = require('./index');
var validators = require('../../controllers/validation');


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
        if(r.lastname !== undefined){
            if(r.lastname.toUpperCase() === value.toUpperCase() ) {
                searchResults.push(r);
            }
        }
    }
    return searchResults;
}

const add = (record) => {
    var lr = db.confirmFields(record);
    if(validators.validateEmail(lr.email)){
        var nUser = new User(lr.id,lr.firstname, lr.lastname, lr.email, lr.password,lr.phone, lr.mobile,lr.profilepic, lr.active);
        return db.save(core.getData(), core.getPath(), nUser.getJSON());
    } else {
        return ['The email is not a valid email address, please check it and try to submit the request again'];
    }
}

const update = (record) => {
    if(validators.validateEmail(record.email)){
        var records = core.getData();
        var nUser = new User(record.id,record.firstname,record.lastname,record.email,record.password,record.phone,record.mobile,record.profilepic,record.active);
        var ind = db.findRecordIndex(records, record.id);
        records[ind].firstname = nUser.getFirstName();
        records[ind].lastname = nUser.getLastName();
        records[ind].email = nUser.getEmail();
        records[ind].password = nUser.getPassword();
        records[ind].phone = nUser.getPhone();
        records[ind].mobile = nUser.getMobile();
        records[ind].profilepic = nUser.getProfilePic();
        records[ind].active = nUser.getActive();
        db.writeData(records, core.getPath());
        return nUser.getJSON();
    } else {
        return ['Email wasnt valid please check the email and resubmit'];
    }
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