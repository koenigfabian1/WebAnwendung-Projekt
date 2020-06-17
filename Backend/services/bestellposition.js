const helper = require("../helper.js");
const BestellpositionDao = require("../dao/bestellpositionDao.js");
const express = require("express");
var serviceRouter = express.Router();


serviceRouter.post("/bestellposition", function(request, response) {
    helper.log("Service Bestellposition: Client requested creation of new record");

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.create(request.body.produktid, request.body.menge);
        helper.log("Service Adresse: Record inserted");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Adresse: Error creating new record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});


serviceRouter.get("/bestellposition/existiert/:id", function(request, response) {
    helper.log("Service Bestellposition: Client requested one record, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.exists(request.params.id);
        helper.log("Service Mehrwertsteuer: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Mehrwertsteuer: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});


serviceRouter.get("/bestellposition/alle", function(request, response) {
    helper.log("Service Bestellposition: Client requested one record, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.loadAll();
        helper.log("Service Mehrwertsteuer: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Mehrwertsteuer: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.delete("/bestellposition/:id", function(request, response) {
    helper.log("Service Bestellposition: Client requested deletion of record, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);

    try {
        bestellpositionDao.delete(request.params.id);
        helper.log("Service Produkt: Deletion of record successfull, id=" + request.params.id);
        response.status(200).json(helper.jsonMsgOK({ "gelöscht": true, "eintrag": obj }));
    } catch (ex) {
        helper.logError("Service Produkt: Error deleting record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.put("/bestellposition", function(request, response) {
    helper.log("Service Bestellposition: Client requested update of existing record");

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.update(request.body.menge, request.body.produktid);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error updating record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});



module.exports = serviceRouter;
