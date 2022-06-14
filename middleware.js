function requstTime(req,res,next) {
    res.requstTime = Date.now()
    return next();
}

function logger(req,res,next) {
    console.log(res.requstTime)
    return next();
}
// module.exports = logger;
module.exports.requstTime = requstTime
module.exports.logger = logger 