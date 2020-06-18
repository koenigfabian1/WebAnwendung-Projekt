/////////////////
// workaround / bugfix for linux systems
Object.fromEntries = l => l.reduce((a, [k, v]) => ({
  ...a,
  [k]: v
}), {})
/////////////////

const helper = require("./helper.js");

try {
  const HTTP_PORT = 80;
  var express = require("express");
  var app = express();
  var path = require("path")

  app.listen(HTTP_PORT, () => {
    helper.log("Start Client...");
    helper.log("Client running at localhost on port %PORT%".replace("%PORT%", HTTP_PORT));
  });

  app.use('/', express.static(__dirname));

  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "start.html"));
  });

  app.get('/produktliste.html*', function(request, response) {
    response.sendFile(path.join(__dirname, "./html", "produktliste.html"));
  });

  app.get('/produktdetail.html*', function(request, response) {
    response.sendFile(path.join(__dirname, "./html", "produktdetail.html"));
  });

  app.get('/orderconfirm.html*', function(request, response) {
    response.sendFile(path.join(__dirname, "./html", "orderconfirm.html"));
  });

  app.get("/start.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "start.html"));
  });


  app.get("/order_confirm.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "order_confirm.html"));
  });

  app.get("/order_process.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "order_process.html"));
  });

  app.get("/Warenkorb.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "Warenkorb.html"));
  });

  app.get("/Impressum.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "Impressum.html"));
  });

  app.get("/Kontakt.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "Kontakt.html"));
  });

  app.get("/order_confirm_Rech.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "order_confirm_Rech.html"));
  });

  app.get("/order_confirm_uber.html", (request, response) => {
    response.sendFile(path.join(__dirname, "./html", "order_confirm_uber.html"));
  });

} catch (ex) {
  helper.logError(ex);
}
