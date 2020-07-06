const Database = require("better-sqlite3");
const dbOptions = {verbose: console.log};
const dbFile = "../Backend/db/db.sqlite";
const dbConnection = new Database(dbFile, dbOptions);
const ProduktDao = require("../Backend/dao/produktDao");
const MehrwertsteuerDao = require("../Backend/dao/mehrwertsteuerdao");

var dao=new ProduktDao(dbConnection);
var dao2=new MehrwertsteuerDao(dbConnection);


module.exports=ProduktDao;



