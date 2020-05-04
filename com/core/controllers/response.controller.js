// This is the message controller
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

var Response = require('../../../lib/core/models/Response');
var cfgController = require('./config.controller.js');

var nResponse = new Response();


const buildResponse = (service, message, data) => {
    let c = cfgController.getServerInfo();
    nResponse.setService(service);
    nResponse.setCodeName(c.codename);
    nResponse.setVersion(c.version);
    nResponse.setServer(c.server + ':' + c.port);
    nResponse.setData(data);
    return {'service':nResponse.getService(), 'server':c.server, 'codename':c.codename, 'version':c.version, 'uri':c.host+':'+c.port, 'message':message, 'data':nResponse.getData()};
}







exports.buildResponse = buildResponse;