function DeviceAuth(device, deviceID, token, date, time) {       // Accept name and age in the constructor
    this.device = device || null;
    this.deviceID  = deviceID  || null;
    this.token  = token  || null;
    this.date  = date  || null;
    this.time  = time  || null;
}

DeviceAuth.prototype.getDevice = function() {
    return this.device;
}

DeviceAuth.prototype.setDevice = function(device) {
    this.device = device;
}

DeviceAuth.prototype.getdeviceID = function(deviceID) {
    return this.deviceID;
}

DeviceAuth.prototype.setDeviceID = function(deviceID) {
    this.deviceID = deviceID;
}

DeviceAuth.prototype.getToken = function() {
    return this.token;
}

DeviceAuth.prototype.setToken = function(token) {
    this.token = token;
}

DeviceAuth.prototype.getDate = function() {
    return this.date;
}

DeviceAuth.prototype.setDate = function(date) {
    this.date = date;
}

DeviceAuth.prototype.getTime = function() {
    return this.time;
}

DeviceAuth.prototype.setTime = function(time) {
    this.time = time;
}

DeviceAuth.prototype.equals = function(otherDeviceAuth) {
    return otherDeviceAuth.getDevice() == this.getDevice()
        && otherDeviceAuth.getdeviceID() == this.getdeviceID()
        && otherDeviceAuth.getToken() == this.getToken()
        && otherDeviceAuth.getDate() == this.getDate()
        && otherDeviceAuth.getTime() == this.getTime();
}

DeviceAuth.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

DeviceAuth.prototype.getJSON = function() {
    let deviceRecord = {'id':'0', 'device': this.getDevice(), 'deviceID': this.getDeviceID(), 'token': this.getToken(), 'date': this.getDate(), 'time': this.getTime()};
    return deviceRecord;
}