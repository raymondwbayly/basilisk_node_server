function Alert(id, name, description, assigned, created, complete, status, active) {       // Accept name and age in the constructor
    this.id = id || 0;
    this.name  = name  || null;
    this.description  = description  || null;
    this.assigned  = assigned  || null;
    this.created  = created  || null;
    this.complete  = complete  || null;
    this.status  = status  || null;
    this.active  = active  || 'true';
}

Alert.prototype.getID = function() {
    return this.id;
}

Alert.prototype.setID = function(id) {
    this.id = id;
}

Alert.prototype.getName = function() {
    return this.name;
}

Alert.prototype.setName = function(name) {
    this.name = name;
}

Alert.prototype.getDescription = function() {
    return this.description;
}

Alert.prototype.setDescription = function(description) {
    this.description = description;
}

Alert.prototype.getAssigned = function() {
    return this.assigned;
}

Alert.prototype.setAssigned = function(assigned) {
    this.assigned = assigned;
}

Alert.prototype.getCreated = function() {
    return this.created;
}

Alert.prototype.setCreated = function(created) {
    this.created = created;
}

Alert.prototype.getComplete = function() {
    return this.complete;
}

Alert.prototype.setComplete = function(complete) {
    this.complete = complete;
}

Alert.prototype.getStatus = function() {
    return this.status;
}

Alert.prototype.setStatus = function(status) {
    this.status = status;
}

Alert.prototype.getActive = function() {
    return this.active;
}

Alert.prototype.setActive = function(active) {
    this.active = active;
}

Alert.prototype.equals = function(otherAlert) {
    return otherAlert.getID() == this.getID()
        && otherAlert.getName() == this.getName()
        && otherAlert.getDescription() == this.getDescription()
        && otherAlert.getAssigned() == this.getAssigned()
        && otherAlert.getCreated() == this.getCreated()
        && otherAlert.getComplete() == this.getComplete()
        && otherAlert.getStatus() == this.getStatus()
        && otherAlert.getActive() == this.getActive();
}

Alert.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Alert.prototype.getJSON = function() {
    return {'id':this.getID().toString(), 'name':this.getName(), 'description': this.getDescription(), 'assigned': this.getAssigned().toString(), 'created': this.getCreated(), 'complete': this.getComplete(), 'status': this.getStatus(), 'active':this.getActive()};
}

module.exports = Alert;