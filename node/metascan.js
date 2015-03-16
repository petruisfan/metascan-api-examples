#!/usr/bin/env node

var program = require('commander');
var _metascan =  require("./_metascan");

//var config = {
//    server: "https://scan.metascan-online.com"
//};

program
    .version('0.0.1')
    .option('-i, --scanip <ip>', 'Scan ip')
    .option('-f, --scanfile <filepath>', 'Scan file')
    .option('-s, --hashquery <hash>', 'Lookup file info using hash')
    .option('-d, --dataquery <dataId>', 'Lookup file info using data id')
    .parse(process.argv);

if (program.scanip) {
    _metascan.scanIp(program.scanip);
} else if (program.scanfile) {
    _metascan.scanFile(program.scanfile);
} else if (program.hashquery) {
    _metascan.queryHash(program.hashquery);
} else if (program.dataquery) {
    _metascan.queryDataId(program.dataquery);
}
