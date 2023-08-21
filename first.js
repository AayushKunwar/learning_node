/*
Core Modules
http, https, fs, path, os
*/

const http = require("http");
const fs = require("fs");
const routes = require("./routes");

const server = http.createServer(routes);
// console.log(req.url, req.method, req.headers);
// process.exit();

server.listen(3000);
