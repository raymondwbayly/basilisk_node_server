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
    nResponse.setServer(c.server);
    nResponse.setMessage(message);
    nResponse.setData(data);
    return nResponse.getJSON();
}







exports.buildResponse = buildResponse;