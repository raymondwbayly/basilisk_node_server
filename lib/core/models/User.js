function User(id, firstname, lastname, email, password, phone, mobile, profilepic, active) {       // Accept name and age in the constructor
    this.id = id || 0;
    this.firstname  = firstname  || null;
    this.lastname  = lastname  || null;
    this.email  = email  || null;
    this.password  = password  || null;
    this.phone  = phone  || [];
    this.mobile  = mobile  || [];
    this.profilepic  = profilepic  || [];
    this.active  = active  || [];
}

User.prototype.getID = function() {
    return this.id;
}

User.prototype.setID = function(id) {
    this.id = id;
}

User.prototype.getFirstName = function() {
    return this.firstname;
}

User.prototype.setFirstname = function(firstname) {
    this.firstname = firstname;
}

User.prototype.getLastName = function() {
    return this.lastname;
}

User.prototype.setLastName = function(lastname) {
    this.lastname = lastname;
}

User.prototype.getEmail = function() {
    return this.email;
}

User.prototype.setEmail = function(email) {
    this.email = email;
}

User.prototype.getPassword = function() {
    return this.password;
}

User.prototype.setPassword = function(password) {
    this.password = password;
}

User.prototype.getPhone = function() {
    return this.phone;
}

User.prototype.setPhone = function(phone) {
    this.phone = phone;
}

User.prototype.getMobile = function() {
    return this.mobile;
}

User.prototype.setMobile = function(mobile) {
    this.mobile = mobile;
}

User.prototype.getProfilePic = function() {
    return this.profilepic;
}

User.prototype.setProfilePic = function(profilepic) {
    this.profilepic = profilepic;
}

User.prototype.getActive = function() {
    return this.active;
}

User.prototype.setActive = function(active) {
    this.active = active;
}



User.prototype.equals = function(otherUser) {
    return otherUser.getID() == this.getID()
        && otherUser.getFirstName() == this.getFirstName()
        && otherUser.getLastName() == this.getLastName()
        && otherUser.getEmail() == this.getEmail()
        && otherUser.getPassword() == this.getPassword()
        && otherUser.getPhone() == this.getPhone()
        && otherUser.getMobile() == this.getMobile()
        && otherUser.getProfilePic() == this.getProfilePic()
        && otherUser.getActive() == this.getActive();
}

User.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

User.prototype.getJSON = function() {
    let userRecord = {'id':this.getID, 'firstname':this.getFirstName(), 'lastname':this.getLastName(), 'email':this.getEmail(), 'password':this.getPassword(), 'phone':this.getPhone(), 'mobile':this.getMobile(), 'profilepic':this.getProfilePic(), 'active':this.getActive()};
    return userRecord;
}

module.exports = User;