function DeviceToken(device, deviceID, token, date, time) {       // Accept name and age in the constructor
    this.device = device || null;
    this.deviceID  = deviceID  || null;
    this.token  = token  || null;
    this.date  = date  || null;
    this.time  = time  || null;
}

DeviceToken.prototype.getDevice = function() {
    return this.device;
}

DeviceToken.prototype.setDevice = function(device) {
    this.device = device;
}

DeviceToken.prototype.getdeviceID = function(deviceID) {
    return this.deviceID;
}

DeviceToken.prototype.setDeviceID = function(deviceID) {
    this.deviceID = deviceID;
}

DeviceToken.prototype.getToken = function() {
    return this.token;
}

DeviceToken.prototype.setToken = function(token) {
    this.token = token;
}

DeviceToken.prototype.getDate = function() {
    return this.date;
}

DeviceToken.prototype.setDate = function(date) {
    this.date = date;
}

DeviceToken.prototype.getTime = function() {
    return this.time;
}

DeviceToken.prototype.setTime = function(time) {
    this.time = time;
}

DeviceToken.prototype.equals = function(otherDeviceAuth) {
    return otherDeviceAuth.getDevice() == this.getDevice()
        && otherDeviceAuth.getdeviceID() == this.getdeviceID()
        && otherDeviceAuth.getToken() == this.getToken()
        && otherDeviceAuth.getDate() == this.getDate()
        && otherDeviceAuth.getTime() == this.getTime();
}

DeviceToken.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

DeviceToken.prototype.getJSON = function() {
    let deviceRecord = {'id':'0', 'device': this.getDevice(), 'deviceID': this.getDeviceID(), 'token': this.getToken(), 'date': this.getDate(), 'time': this.getTime()};
    return deviceRecord;
}

module.exports = DeviceToken;