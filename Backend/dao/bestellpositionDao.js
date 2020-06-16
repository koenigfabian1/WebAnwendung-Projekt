const helper = require("../helper.js");
const ProduktDao = require("./produktDao.js");

class BestellpositionDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadById(id) {
        const produktDao = new ProduktDao(this._conn);

        var sql = "SELECT * FROM Bestellposition WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        result.bestellung = { "id": result.bestellungid };
        delete result.bestellungid;

        result.produkt = produktDao.loadById(result.produktid);
        delete result.produktid;

        result.mehrwertsteuersumme = helper.round(result.menge * result.produkt.mehrwertsteueranteil);
        result.nettosumme = helper.round(result.menge * result.produkt.nettopreis);
        result.bruttosumme = helper.round(result.menge * result.produkt.bruttopreis);

        return result;
    }

    loadAll() {
        var sql = "SELECT * FROM Bestellposition";
        var statement = this._conn.prepare(sql);
        var result = statement.all();

        if (helper.isArrayEmpty(result))
            return [];

        return result;
    }

    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Bestellposition WHERE ProduktID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    create(produktid, menge) {
        var sql = "INSERT INTO Bestellposition (ProduktID,Menge) VALUES (?,?)";
        var statement = this._conn.prepare(sql);
        var params = [produktid, menge];
        var result = statement.run(params);

        if (result.changes != 1)
            throw new Error("Could not insert new Record. Data: " + params);

        var newObj = this.loadById(result.lastInsertRowid);
        return newObj;
    }

    update(id, menge = 1) {
        var sql = "UPDATE Bestellposition SET Menge=? WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var params = [bestellungid, produktid, menge, id];
        var result = statement.run(params);

        if (result.changes != 1)
            throw new Error("Could not update existing Record. Data: " + params);

        var updatedObj = this.loadById(id);
        return updatedObj;
    }

    delete(id) {
        try {
            var sql = "DELETE FROM Bestellposition WHERE ProduktID=?";
            var statement = this._conn.prepare(sql);
            var result = statement.run(id);

            if (result.changes != 1)
                throw new Error("Could not delete Record by id=" + id);

            return true;
        } catch (ex) {
            throw new Error("Could not delete Record by id=" + id + ". Reason: " + ex.message);
        }
    }

    toString() {
        helper.log("BestellpositionDao [_conn=" + this._conn + "]");
    }
}

module.exports = BestellpositionDao;
