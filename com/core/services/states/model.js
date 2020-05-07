function State(id, name, abb, code, active) {       // Accept name and age in the constructor
    this.id = id || '0';
    this.name  = name  || null;
    this.abb  = abb  || null;
    this.code  = code  || null;
    this.active  = active  || 'true';
}

State.prototype.getID = function() {
    return this.id;
}

State.prototype.setID = function(id) {
    this.id = id;
}

State.prototype.getName = function() {
    return this.name;
}

State.prototype.setName = function(name) {
    this.name = name;
}

State.prototype.getAbbreviation = function() {
    return this.abb;
}

State.prototype.setAbbreviation = function(abb) {
    this.abb = abb;
}

State.prototype.getCode = function() {
    return this.code;
}

State.prototype.setCode = function(code) {
    this.code = code;
}

State.prototype.getActive = function() {
    return this.active;
}

State.prototype.setActive = function(active) {
    this.active = active;
}

State.prototype.equals = function(otherState) {
    return otherState.getID() == this.getID()
        && otherState.getName() == this.getName()
        && otherState.getAbbreviation() == this.getAbbreviation()
        && otherState.getCode() == this.getCode()
        && otherState.getActive() == this.getActive();
}

State.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

State.prototype.getJSON = function() {
    return {'id':this.getID().toString(), 'name':this.getName(), 'abb': this.getAbbreviation(), 'code': this.getCode(), 'active':this.getActive()};
}

module.exports = State;