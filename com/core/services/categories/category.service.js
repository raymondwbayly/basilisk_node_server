// This is the user service

var db = require('../../controllers/database.controller');
var Category = require('../../../../lib/core/models/Category');

const listCategories = () => {
    return db.listTable('categories');
}

const searchCategories = (value) => {
    return db.searchTable('categories', value);
}

const addCategory = (cat) => {
    var nCategory = new Category;
    nCategory.setID(db.getNextID('categories'));
    nCategory.setName(cat.name);
    nCategory.setDescription(cat.description);
    nCategory.setActive(cat.active);
    return db.addToTable('categories', nCategory.getJSON());
}

const updateCategory = (cat) => {
    var nCategory = new Category;
    var Categories = db.listTable('categories');
    var tmpInd = db.findRecordIndex(Categories, cat.id.toString());
    nCategory.setID(cat.id);
    nCategory.setName(cat.name);
    nCategory.setDescription(cat.description);
    nCategory.setActive(cat.active);
    Categories[tmpInd].name = nCategory.getName();
    Categories[tmpInd].description = nCategory.getDescription();
    Categories[tmpInd].active = nCategory.getActive();
    db.updateTable('categories', Categories);
    return nCategory.getJSON();
}

const setActive = (id) => {
    var Categories = db.listTable('categories');
    var tmpInd = db.findRecordIndex(Categories, id);
    if(Categories[tmpInd].active === 'true'){
        Categories[tmpInd].active = 'false'
    } else {
        Categories[tmpInd].active = 'true'
    }
    db.updateTable('categories', Categories);
    return [{"id":id}];
}

// TODO update the User service to delete a record
const deleteCategory = (id) => {
    return [];
}



exports.listCategories = listCategories;
exports.searchCategories = searchCategories;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;
exports.setActive = setActive;
exports.deleteCategory = deleteCategory;