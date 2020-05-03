function UserAuth(name, email, token, date, time) {       // Accept name and age in the constructor
    this.name = name || null;
    this.email  = email  || null;
    this.token  = token  || null;
    this.date  = date  || null;
    this.time  = time  || null;
}

UserAuth.prototype.getName = function() {
    return this.name;
}

UserAuth.prototype.setName = function(name) {
    this.name = name;
}

UserAuth.prototype.getEmail = function() {
    return this.email;
}

UserAuth.prototype.setEmail = function(email) {
    this.email = email;
}

UserAuth.prototype.getToken = function() {
    return this.token;
}

UserAuth.prototype.setToken = function(token) {
    this.token = token;
}

UserAuth.prototype.getDate = function() {
    return this.date;
}

UserAuth.prototype.setDate = function(date) {
    this.date = date;
}

UserAuth.prototype.getTime = function() {
    return this.time;
}

UserAuth.prototype.setTime = function(time) {
    this.time = time;
}

UserAuth.prototype.equals = function(otherUserAuth) {
    return otherUserAuth.getName() == this.getName()
        && otherUserAuth.getEmail() == this.getEmail()
        && otherUserAuth.getToken() == this.getToken()
        && otherUserAuth.getDate() == this.getDate()
        && otherUserAuth.getTime() == this.getTime();
}

UserAuth.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

UserAuth.prototype.getJSON = function() {
    let userRecord = {'id':'0', 'name': this.getName(), 'email': this.getEmail(), 'token': this.getToken(), 'date': this.getDate(), 'time': this.getTime()};
    return userRecord;
}