
var http = require('http');
var https = require('https');

var config = require("./config");

module.exports = {
    /**
     * Query scan results based on dataId
     * @param dataId
     */
    queryDataId: function(dataId) {
        console.log("Data id is: ", dataId);
        console.log("Initiating request...");

        if ( dataId.length != 32 ) {
            // TODO: is this so?
            console.log("Data id must be a string of 32 characters");
            return;
        }
        var options = {
            host: "scan" + config.server,
            port: 80,
            path: '/v2/file/' + dataId,
            method: 'GET',
            headers: { apikey: config.apikey }
        };

        http.request(options, function(res) {
            //console.log('STATUS: ' + res.statusCode);
            //console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var scanResults = JSON.parse(chunk);
                console.log(JSON.stringify(scanResults, null, 2));
            });
        }).end();
    },
    /**
     * Query scan results based on hash
     */
    queryHash: function(hash) {
        console.log("File hash is: ", hash);
        console.log("Initiating request...");

        var options = {
            host: "scan." + config.server,
            port: 80,
            path: '/v2/hash/' + hash,
            method: 'GET',
            headers: { apikey: config.apikey }
        };

        http.request(options, function(res) {
            //console.log('STATUS: ' + res.statusCode);
            //console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var scanResults = JSON.parse(chunk);
                console.log(JSON.stringify(scanResults, null, 2));
            });
        }).end();
    },
    /**
     * Scan IP
     * @param ip
     */
    scanIp: function(ip) {
        console.log("Scanning ip: ", ip, "...");
        var options = {
            host: "ipscan." + config.server,
            port: 443,
            path: '/v1/scan/' + ip,
            method: 'GET',
            headers: { apikey: config.apikey }
        };

        console.log(options.host);
        
        var req = https.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var scanResults = JSON.parse(chunk);
                console.log(JSON.stringify(scanResults, null, 2));
            });
            res.on('error', function () {
                console.log(arguments);
            });
        }).end();

        console.log(req._headers);
    },
    /**
     * Scan file
     * @param file
     */
    scanFile: function(file) {
        console.log("Scanning file: ", file, "...");

    }
};
