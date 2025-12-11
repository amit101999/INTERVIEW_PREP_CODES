const cluster = require("cluster");
const http = require("http");
const os = require("os");


if (cluster.isMaster) {
    os.cpus().forEach(() => cluster.fork());
} else {
    http.createServer((req, res) => {
        res.end("Handled by worker " + process.pid);
        console.log("process handled by :" + process.pid)
    }).listen(6500);
}

