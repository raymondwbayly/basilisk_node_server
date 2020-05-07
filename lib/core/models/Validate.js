function Validate(name, message, valid) {       // Accept name and age in the constructor
    this.name = name || null;
    this.message  = message  || null;
    this.valid  = valid  || false;
}

Validate.prototype.getName = function() {
    return this.name;
}

Validate.prototype.setName = function(name) {
    this.name = name;
}

Validate.prototype.appendName = function(name) {
    this.name =  this.name + ' , ' + name;
}

Validate.prototype.getMessage = function() {
    return this.message;
}

Validate.prototype.setMessage = function(message) {
    this.message = message;
}

Validate.prototype.appendMessage = function(message) {
    this.message =  this.message + ' , ' + message;
}

Validate.prototype.getValid = function() {
    return this.valid;
}

Validate.prototype.setValid = function(valid) {
    this.valid = valid;
}





Validate.prototype.equals = function(otherValidation) {
    return otherValidation.getName() == this.getName()
        && otherValidation.getMessage() == this.getMessage()
        && otherValidation.getValid() == this.getValid();
}

Validate.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Validate.prototype.getJSON = function() {
    return {'name':this.getName(), 'message':this.getMessage()};
}

module.exports = Validate;