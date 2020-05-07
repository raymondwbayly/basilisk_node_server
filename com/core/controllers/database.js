// Database Engine
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');



const active = (record) => {
    return [];
}

const remove = (records, id) => {
    return 'Disabled for now';
}

const getNextID = (records) => {
    var tmpInd = records.length;
    tmpInd = tmpInd + 1;
    return tmpInd.toString();
}

const get = (records, uid) => {
    let ind =  records.findIndex(x => x.id === uid);
    return records[ind];
}

const findRecordIndex = (records, uid) => {
    return records.findIndex(x => x.id === uid);
}

const findRecordByID = (records, uid) => {
    return lodash.filter(records, x => x.id === uid);
}

const setNextID = (records, record) => {
    var tmpInd = records.length;
    tmpInd = tmpInd + 1;
    record.id = tmpInd.toString();
    return record;
}

const save = (records, path, record) => {
    let tmpInd = getNextID(records);
        record.id = tmpInd.toString();
        records.push(record);
        writeData(records,path);
    return record;
}

const writeData = (records,path) => {
    fs.writeFileSync(path, JSON.stringify(records));
    return true;
}

const confirmFields = (record) => {
    if(record.id === undefined){
        record.id = '0';
    }
    if(record.active === undefined){
        record.active = 'true';
    }
    return record;
}

const checkActive = (records,uid,path) => {
    var ind = findRecordIndex(records, uid);
    if(records[ind].active === 'true'){
        records[ind].active = 'false';
    } else {
        records[ind].active = 'true';
    }
    writeData(records, path);
    return true;
}

exports.active = active;
exports.get = get;
exports.remove = remove;
exports.getNextID = getNextID;
exports.findRecordIndex = findRecordIndex;
exports.findRecordByID = findRecordByID;
exports.setNextID = setNextID;
exports.writeData = writeData;
exports.checkActive = checkActive;
exports.save = save;
exports.confirmFields = confirmFields;