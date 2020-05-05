var path = require('path');
var fs = require('fs');

// Table Registration This loads the table
// Users JSON
var usersPath = path.join(__dirname, './tables', 'users.json');
var usersTable =  require(usersPath);



const getData = (table) => {
    var returnTable = ['Table return needs to be either alerts, config, release, news, tasks, users'];
    var returnPath = '';
    if(table === 'users'){ returnTable = usersTable; returnPath = usersPath}
    return {table: returnTable, path: returnPath};
}

exports.getData = getData;