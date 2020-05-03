var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var Configuration = require('../../../lib/core/models/Configuration');

// Alerts JSON
var configPath = path.join(__dirname, '../../../lib/data', 'config.json');
var cfgJSON =  require(configPath);

var ServerCfg = new Configuration(cfgJSON);


const getConfig = () => {
    return ServerCfg;
}

exports.getConfig = getConfig;