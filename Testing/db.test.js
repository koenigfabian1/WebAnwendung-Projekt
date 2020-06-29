const Database = require("better-sqlite3");
const dbOptions = {verbose: console.log};
const dbFile = "../Backend/db/db.sqlite";
const dbConnection = new Database(dbFile, dbOptions);
const ProduktDao = require("../Backend/dao/produktDao");
const MehrwertsteuerDao = require("../Backend/dao/mehrwertsteuerdao");

var dao=new ProduktDao(dbConnection);
var dao2=new MehrwertsteuerDao(dbConnection);


module.exports=ProduktDao;



test('Test ob die Connection vorhanden ist', () => {
    expect(dao.getConnection()).toBeTruthy();
  });

test('Bieten wir in unserem Shop das Produkt ALCLEAR Waschhandschuh an?', () => {
    expect(dao.loadById(1).name).toEqual("ALCLEAR Waschhandschuh");
  });

test('Ist der Nettopreis der Lackknete korrekt', () => {
    expect(dao.loadAllByCategoryId(1)[1].nettopreis).toEqual(14.277);
  });

test('Gibt es bei der Tabelle Mehrwertsteuer den Eintrag mit der ID 1?', () => {
    expect(dao2.exists(1)).toBeTruthy();
  });
