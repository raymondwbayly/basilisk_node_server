function Configuration(cfgObj) {       // Accept name and age in the constructor
    this.name = cfgObj.name || null;
    this.codename = cfgObj.codename || null;
    this.description  = cfgObj.description  || null;
    this.version  = cfgObj.version  || null;
    this.host  = cfgObj.host  || null;
    this.port  = cfgObj.port  || null;
    this.git  = cfgObj.git  || null;
    this.readmedoc  = cfgObj.readmedoc  || null;
    this.installdoc  = cfgObj.installdoc || null;
    this.versiondoc  = cfgObj.versiondoc  || null;
    this.releasedoc  = cfgObj.releasedoc  || null;
}

Configuration.prototype.getName = function() {
    return this.name;
}

Configuration.prototype.setName = function(name) {
    this.name = name;
}

Configuration.prototype.getDeveloper = function() {
    return this.developer;
}

Configuration.prototype.setDeveloper = function(developer) {
    this.developer = developer;
}

Configuration.prototype.getCompany = function() {
    return this.company;
}

Configuration.prototype.setCompany = function(company) {
    this.company = company;
}

Configuration.prototype.getCodeName = function() {
    return this.codename;
}

Configuration.prototype.setCodeName = function(codename) {
    this.codename = codename;
}

Configuration.prototype.getDescription = function() {
    return this.description;
}

Configuration.prototype.setDescription = function(description) {
    this.description = description;
}

Configuration.prototype.getVersion = function() {
    return this.version;
}

Configuration.prototype.setVersion = function(version) {
    this.token = version;
}

Configuration.prototype.getHost = function() {
    return this.host;
}

Configuration.prototype.setHost = function(host) {
    this.host = host;
}

Configuration.prototype.getPort = function() {
    return this.port;
}

Configuration.prototype.setPort = function(port) {
    this.port = port;
}

Configuration.prototype.getGit = function() {
    return this.git;
}

Configuration.prototype.setGit = function(git) {
    this.git = git;
}

Configuration.prototype.getDocumentReadme = function() {
    return this.readmedoc;
}

Configuration.prototype.setDocumentReadme = function(readmedoc) {
    this.readmedoc = readmedoc;
}

Configuration.prototype.getDocumentInstall = function() {
    return this.installdoc;
}

Configuration.prototype.setDocumentInstall = function(installdoc) {
    this.installdoc = installdoc;
}

Configuration.prototype.getDocumentVersion = function() {
    return this.versiondoc;
}

Configuration.prototype.setDocumentVersion = function(versiondoc) {
    this.versiondoc = versiondoc;
}

Configuration.prototype.getDocumentRelease = function() {
    return this.releasedoc;
}

Configuration.prototype.setDocumentRelease = function(releasedoc) {
    this.releasedoc = releasedoc;
}

Configuration.prototype.equals = function(otherCfg) {
    return otherCfg.getName() == this.getName()
        && otherCfg.getDeveloper() == this.getDeveloper()
        && otherCfg.getCompany() == this.getCompany()
        && otherCfg.getCodeName() == this.getCodeName()
        && otherCfg.getDescription() == this.getDescription()
        && otherCfg.getVersion() == this.getVersion()
        && otherCfg.getHost() == this.getHost()
        && otherCfg.getPort() == this.getPort()
        && otherCfg.getGit() == this.getGit()
        && otherCfg.getDocumentReadme() == this.getDocumentReadme()
        && otherCfg.getDocumentInstall() == this.getDocumentInstall()
        && otherCfg.getDocumentVersion() == this.getDocumentVersion()
        && otherCfg.getDocumentRelease() == this.getDocumentRelease();
}

Configuration.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Configuration.prototype.getJSON = function() {
    let cfgRecord = {'id':'0', 'name': this.getName(), 'developer':this.getDeveloper(), 'company':this.getCompany(), 'codename': this.getCodeName(), 'description': this.getDescription(), 'version': this.getVersion(), 'host': this.getHost(), 'port': this.getPort(), 'git': this.getGit(), "readmedoc":this.getDocumentReadme(), "installdoc":this.getDocumentInstall(), "versiondoc":this.getDocumentVersion(), "releasedoc":this.getDocumentRelease()};
    return cfgRecord;
}

module.exports = Configuration;