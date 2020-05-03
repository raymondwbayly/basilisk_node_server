const winston = require('winston')
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

function logRequest(req, res, next) {
    logger.info(req.url)
    // next();
    return true;
}

function logError(err, req, res, next) {
    logger.error(err)
    // next();
    return true;
}

exports.logRequest = logRequest;
exports.logError = logError;