function UserToken(name, email, token, date, time) {       // Accept name and age in the constructor
    this.name = name || null;
    this.email  = email  || null;
    this.token  = token  || null;
    this.date  = date  || null;
    this.time  = time  || null;
}

UserToken.prototype.getName = function() {
    return this.name;
}

UserToken.prototype.setName = function(name) {
    this.name = name;
}

UserToken.prototype.getEmail = function() {
    return this.email;
}

UserToken.prototype.setEmail = function(email) {
    this.email = email;
}

UserToken.prototype.getToken = function() {
    return this.token;
}

UserAuth.prototype.setToken = function(token) {
    this.token = token;
}

UserToken.prototype.getDate = function() {
    return this.date;
}

UserToken.prototype.setDate = function(date) {
    this.date = date;
}

UserToken.prototype.getTime = function() {
    return this.time;
}

UserToken.prototype.setTime = function(time) {
    this.time = time;
}

UserToken.prototype.equals = function(otherUserAuth) {
    return otherUserAuth.getName() == this.getName()
        && otherUserAuth.getEmail() == this.getEmail()
        && otherUserAuth.getToken() == this.getToken()
        && otherUserAuth.getDate() == this.getDate()
        && otherUserAuth.getTime() == this.getTime();
}

UserToken.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

UserToken.prototype.getJSON = function() {
    return {'id':'0', 'name': this.getName(), 'email': this.getEmail(), 'token': this.getToken(), 'date': this.getDate(), 'time': this.getTime()};
}

module.exports = UserToken;