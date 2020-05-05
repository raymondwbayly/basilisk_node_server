// This is the user service

var db = require('../../controllers/database.controller');
var Task = require('../../../../lib/core/models/Task');

const listTasks = () => {
    return db.listTable('tasks');
}

const searchTasks = (value) => {
    return db.searchTable('tasks', value);
}

const addTask = (task) => {
    var nTask = new Task;
    nTask.setID(db.getNextID('tasks'));
    nTask.setName(task.name);
    nTask.setDescription(task.description);
    nTask.setActive(task.active);
    return db.addToTable('tasks', nTask.getJSON());
}

const updateTask = (task) => {
    var nTask = new Task;
    var Tasks = db.listTable('tasks');
    var tmpInd = db.findRecordIndex(Tasks, task.id.toString());
    nTask.setID(task.id);
    nTask.setName(task.name);
    nTask.setDescription(task.description);
    nTask.setActive(task.active);
    Tasks[tmpInd].name = nTask.getName();
    Tasks[tmpInd].description = nTask.getDescription();
    Tasks[tmpInd].active = nTask.getActive();
    db.updateTable('tasks', Tasks);
    return nTask.getJSON();
}

const setActive = (id) => {
    var Tasks = db.listTable('tasks');
    var tmpInd = db.findRecordIndex(Tasks, id);
    if(Tasks[tmpInd].active === 'true'){
        Tasks[tmpInd].active = 'false'
    } else {
        Tasks[tmpInd].active = 'true'
    }
    db.updateTable('tasks', Tasks);
    return [{"id":id}];
}

// TODO update the User service to delete a record
const deleteTask = (id) => {
    return [];
}



exports.listTasks = listTasks;
exports.searchTasks = searchTasks;
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.setActive = setActive;
exports.deleteTask = deleteTask;