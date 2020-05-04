// Database Engine

var tables = require('../../../lib/data/table.register');


const list = (table) => {
    return tables.getData(table);
}

exports.list = list;