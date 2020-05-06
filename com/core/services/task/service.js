// This is the user service

var db = require('../../controllers/database.controller');
var Task = require('../../../../lib/core/models/Task');
var core = require('./index');


const list = () => {
    let localData = core.getData();
    return localData;
}

const get = (uid) => {
    let localData = core.getData();
    let ind =  localData.findIndex(x => x.id === uid);
    return localData[ind];
}

const search = (value) => {
    let localData = core.getData();
    let searchResults = [];
    for(let r of localData) {
        if(r.name !== undefined){
            if(r.name.toUpperCase() === value.toUpperCase() ) {
                searchResults.push(r);
            }
        }
    }
    return searchResults;
}

const add = (task) => {
    let localData = core.getData();
    return [];
}

const update = (task) => {
    let localData = core.getData();
    return [];
}

const remove = (uid) => {
    let localData = core.getData();
    return [];
}

const active = (uid) => {
    let localData = core.getData();
    return [];
}



exports.list = list;
exports.get = get;
exports.search = search;
exports.add = add;
exports.update = update;
exports.remove = remove;