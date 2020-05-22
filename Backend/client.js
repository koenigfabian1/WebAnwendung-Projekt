/////////////////
// workaround / bugfix for linux systems
Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {})
/////////////////

const helper = require("./helper.js");

try {
    const HTTP_PORT = 8001;
    var express = require("express");
    var app = express();
    var path = require("path")

    app.listen(HTTP_PORT, () => {
        helper.log("Start Client...");
        helper.log("Client running at localhost on port %PORT%".replace("%PORT%", HTTP_PORT));
        helper.log("\n\n-----------------------------------------");
        helper.log("exit / stop Client by pressing 2 x CTRL-C");
        helper.log("-----------------------------------------\n\n");
    });

    app.use('/', express.static(__dirname + '/../../WebAnwendung-Projekt'));

    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "start.html"));
    });

    app.get("/start.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "start.html"));
    });

    app.get("/Verkauf1.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "Verkauf1.html"));
    });

    app.get("/Verkauf2.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "Verkauf2.html"));
    });

    app.get("/Verkauf3.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "Verkauf3.html"));
    });

    app.get("order_confirm.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "order_confirm.html"));
    });

    app.get("/order_process.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "order_process.html"));
    });

    app.get("/Warenkorb.html", (request, response) => {
        response.sendFile(path.join(__dirname, "../html", "Warenkorb.html"));
    });

} catch (ex) {
    helper.logError(ex);
}
