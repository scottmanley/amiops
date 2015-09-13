var http = require('http');
var sql = require('msnodesql');
var http = require('http');
var fs = require('fs');
var useTrustedConnection = false;
var conn_str = "Driver={SQL Server Native Client 11.0};Server=tcp:w8bvrrkcp9.database.windows.net;" + 
(useTrustedConnection == true ? "Trusted_Connection={Yes};" : "UID=admin;PWD=yourpassword;") + 
"Database={AmiAdvantageDb};"
sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    else
        console.log("Successfuly connected");
}); 