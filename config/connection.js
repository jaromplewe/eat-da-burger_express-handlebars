require('dotenv').config();
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("\nError connecting: " + err.stack + "\n");
    return;
  }
  console.log("\nConnected as id " + connection.threadId + "\n");
});

module.exports = connection;