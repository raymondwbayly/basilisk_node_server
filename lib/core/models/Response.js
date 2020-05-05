function Response(service, server, version, codename, build, message, data) {       // Accept name and age in the constructor
    this.service = service || null;
    this.server  = server  || null;
    this.version  = version  || null;
    this.codename  = codename  || null;
    this.build = build || null;
    this.message  = message  || null;
    this.data  = data  || [];
}

Response.prototype.getService = function() {
    return this.service;
}

Response.prototype.setService = function(service) {
    this.service = service;
}

Response.prototype.getServer = function() {
    return this.server;
}

Response.prototype.setServer = function(server) {
    this.server = server;
}

Response.prototype.getVersion = function() {
    return this.version;
}

Response.prototype.setVersion = function(version) {
    this.version = version;
}

Response.prototype.getCodeName = function() {
    return this.codename;
}

Response.prototype.setCodeName = function(codename) {
    this.codename = codename;
}

Response.prototype.getBuild = function() {
    return this.build;
}

Response.prototype.setBuild = function(build) {
    this.build = build;
}

Response.prototype.getMessage = function() {
    return this.message;
}

Response.prototype.setMessage = function(message) {
    this.message = message;
}

Response.prototype.getData = function() {
    return this.data;
}

Response.prototype.setData = function(data) {
    this.data = data;
}



Response.prototype.equals = function(otherUserAuth) {
    return otherUserAuth.getService() == this.getService()
        && otherUserAuth.getServer() == this.getServer()
        && otherUserAuth.getCodeName() == this.getCodeName()
        && otherUserAuth.getBuild() == this.getBuild()
        && otherUserAuth.getMessage() == this.getMessage()
        && otherUserAuth.getData() == this.getData();
}

Response.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Response.prototype.getJSON = function() {
    return {'service':this.getService(), 'server':this.getServer(), 'codename':this.getCodeName(), 'build': this.getBuild() , 'version':this.getVersion(), 'message':this.getMessage(), 'data':this.getData()};
}

module.exports = Response;