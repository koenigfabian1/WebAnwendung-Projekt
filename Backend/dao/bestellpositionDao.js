const helper = require("../helper.js");
const ProduktDao = require("./produktDao.js");

class BestellpositionDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadByProduktId(id) {
        var sql = "SELECT * FROM Bestellposition WHERE ProduktID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        return result;
    }

    loadAll() {
        const produktDao = new ProduktDao(this._conn);

        var sql = "SELECT * FROM Bestellposition";
        var statement = this._conn.prepare(sql);
        var result = statement.all();

        if (helper.isArrayEmpty(result))
            return [];


        result = helper.arrayObjectKeysToLower(result);

        for (var i = 0; i < result.length; i++){

          result[i].produkt = produktDao.loadById(result[i].produktid);
          delete result[i].produktid;

        }



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
    }

    update(produktid,menge) {
        var sql = "UPDATE Bestellposition SET Menge=? WHERE ProduktID=?";
        var statement = this._conn.prepare(sql);
        var params = [produktid, menge];
        var result = statement.run(params);

        if (result.changes != 1)
            throw new Error("Could not update existing Record. Data: " + params);

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
