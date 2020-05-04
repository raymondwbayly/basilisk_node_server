// Database Engine
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var tables = require('../../../lib/data/table.register');


const listTable = (table) => {
    return tables.getData(table).table;
}

const searchTable = (table, value) => {
    var tableData = tables.getData(table).table;
    return searchRecords(table, tableData, value);
}

const addToTable = (table, value) => {
    var tableData = tables.getData(table).table;
    return [];
}

const updateTable = (table, value) => {
    var tableData = tables.getData(table).table;
    return [];
}

const activeFlag = (table, value) => {
    var tableData = tables.getData(table).table;
    return [];
}

const deleteFromTable = (table, value) => {
    var tableData = tables.getData(table).table;
    return [];
}


// Engine Functions

const findRecordIndex = (records, uid) => {
    return records.findIndex(x => x.id === uid);
}

const findRecordByID = (records, uid) => {
    return lodash.filter(records, x => x.id === uid);
}

const searchRecords = (table, records, value) => {
    var tmpSearched = [];
    if(table === 'users'){
        for(let r of records) {
            if(r.lastname.toUpperCase() === value.toUpperCase() ) {
                tmpSearched.push(r);
            }
        }
    }
    return tmpSearched;
}

const setRecordID = (records, obj) => {
    var tmpInd = records.length;
    tmpInd = tmpInd + 1;
    obj.id = tmpInd;
    return obj;
}

const writeToTable = (records,path) => {
    fs.writeFileSync(path, JSON.stringify(records));
    return true;
}

exports.listTable = listTable;
exports.searchTable = searchTable;