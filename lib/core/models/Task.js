function Task(id, name, description, active) {       // Accept name and age in the constructor
    this.id = id || 0;
    this.name  = name  || null;
    this.description  = description  || null;
    this.active  = active  || 'true';
}

Task.prototype.getID = function() {
    return this.id;
}

Task.prototype.setID = function(id) {
    this.id = id;
}

Task.prototype.getName = function() {
    return this.name;
}

Task.prototype.setName = function(name) {
    this.name = name;
}

Task.prototype.getDescription = function() {
    return this.description;
}

Task.prototype.setDescription = function(description) {
    this.description = description;
}

Task.prototype.getActive = function() {
    return this.active;
}

Task.prototype.setActive = function(active) {
    this.active = active;
}

Task.prototype.equals = function(otherTask) {
    return otherTask.getID() == this.getID()
        && otherTask.getName() == this.getName()
        && otherTask.getDescription() == this.getDescription()
        && otherTask.getActive() == this.getActive();
}

Task.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Task.prototype.getJSON = function() {
    return {'id':this.getID().toString(), 'name':this.getName(), 'description':this.getDescription(), 'active':this.getActive()};
}

module.exports = Task;