// Database Engine
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');



const active = (record) => {
    return [];
}

const remove = (records, record) => {
    return ['Disabled for now'];
}

const getNextID = (records) => {
    var tmpInd = records.length;
    tmpInd = tmpInd + 1;
    return tmpInd;
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
    record.id = tmpInd;
    return record;
}

const save = (records, path, record) => {
    let tmpInd = getNextID(records);
        record.id = tmpInd;
        records.push(record);
        writeData(records,path);
    return record;
}

const writeData = (records,path) => {
    fs.writeFileSync(path, JSON.stringify(records));
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
exports.save = save;