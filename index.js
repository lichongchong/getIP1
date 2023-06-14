var getRawBody = require('raw-body')
module.exports.handler = function (request, response, context) {
    getRawBody(request, function (err, data) {
        var respBody = new Buffer.from(JSON.stringify({"IP": request.clientIP,"ok": "9"}));
        response.setStatusCode(200)
        response.setHeader('content-type', 'text/html')
        response.send(respBody)
    })
};
