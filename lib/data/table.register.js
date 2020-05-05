var path = require('path');
var fs = require('fs');

// Table Registration This loads the table
// Users JSON
var usersPath = path.join(__dirname, './tables', 'users.json');
var usersTable =  require(usersPath);

// Category JSON
var categoryPath = path.join(__dirname, './tables', 'category.json');
var categoryTable =  require(categoryPath);

// Articles JSON
var articlePath = path.join(__dirname, './tables', 'articles.json');
var articleTable =  require(articlePath);



const getData = (table) => {
    var returnTable = ['Table return needs to be either alerts, config, release, news, tasks, users'];
    var returnPath = '';
    if(table === 'users'){ returnTable = usersTable; returnPath = usersPath}
    if(table === 'articles'){ returnTable = articleTable; returnPath = articlePath}
    if(table === 'categories'){ returnTable = categoryTable; returnPath = categoryPath}
    return {table: returnTable, path: returnPath};
}

exports.getData = getData;