function Category(id, name, description, active) {       // Accept name and age in the constructor
    this.id = id || 0;
    this.name  = name  || null;
    this.description  = description  || null;
    this.active  = active  || 'true';
}

Category.prototype.getID = function() {
    return this.id;
}

Category.prototype.setID = function(id) {
    this.id = id;
}

Category.prototype.getName = function() {
    return this.name;
}

Category.prototype.setName = function(name) {
    this.name = name;
}

Category.prototype.getDescription = function() {
    return this.description;
}

Category.prototype.setDescription = function(description) {
    this.description = description;
}

Category.prototype.getActive = function() {
    return this.active;
}

Category.prototype.setActive = function(active) {
    this.active = active;
}

Category.prototype.equals = function(otherDescription) {
    return otherDescription.getID() == this.getID()
        && otherDescription.getName() == this.getName()
        && otherDescription.getDescription() == this.getDescription()
        && otherDescription.getActive() == this.getActive();
}

Category.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Category.prototype.getJSON = function() {
    return {'id':this.getID().toString(), 'name':this.getName(), 'description':this.getDescription(), 'active':this.getActive()};
}

module.exports = Category;