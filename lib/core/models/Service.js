function Service(title, category, uri, path, model, routes, service, data) {
    this.title  = title  || null;
    this.category  = category  || null;
    this.uri  = uri  || null;
    this.path  = path  || null;
    this.model  = model  || {};
    this.routes  = routes  || {};
    this.service  = service  || {};
    this.data  = data  || {};
}

Service.prototype.getTitle = function() {
    return this.title;
}

Service.prototype.setTitle = function(title) {
    this.title = title;
}

Service.prototype.getCategory = function() {
    return this.category;
}

Service.prototype.setCategory = function(category) {
    this.category = category;
}

Service.prototype.getURI = function() {
    return this.uri;
}

Service.prototype.setURI = function(uri) {
    this.uri = uri;
}

Service.prototype.getPath = function() {
    return this.path;
}

Service.prototype.setPath = function(path) {
    this.path = path;
}

Service.prototype.getModel = function() {
    return this.model;
}

Service.prototype.setModel = function(model) {
    this.model = model;
}

Service.prototype.getRoutes = function() {
    return this.routes;
}

Service.prototype.setRoutes = function(routes) {
    this.routes = routes;
}

Service.prototype.getService = function() {
    return this.service;
}

Service.prototype.setService = function(service) {
    this.service = service;
}

Service.prototype.getData = function() {
    return this.data;
}

Service.prototype.setData = function(data) {
    this.data = data;
}

Service.prototype.equals = function(otherService) {
    return otherService.getURI() == this.getURI()
        && otherService.getPath() == this.getPath()
        && otherService.getModel() == this.getModel()
        && otherService.getRoutes() == this.getRoutes()
        && otherService.getService() == this.getService()
        && otherService.getData() == this.getData();
}


Service.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = Service;