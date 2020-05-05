var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var Configuration = require('../../../lib/core/models/Configuration');

// Alerts JSON
var configPath = path.join(__dirname, '../../../lib/core/config', 'config.json');
var cfgJSON =  require(configPath);

var ServerCfg = new Configuration(cfgJSON);


const getConfig = () => {
    return ServerCfg;
}

const getServerInfo = () => {

    return {'server': ServerCfg.getName(),'version': ServerCfg.getVersion(), 'codename': ServerCfg.getCodeName(), 'host':ServerCfg.getHost(), 'port':ServerCfg.getPort()};
}

const getVersion = () => {
    return ServerCfg.getVersion();
}

exports.getConfig = getConfig;
exports.getVersion = getVersion;
exports.getServerInfo = getServerInfo;
