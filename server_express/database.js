const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "167.71.36.84",
    user: "consultora-fm",
    password: "203695@!Aihh",
    database: "consultora-fm"
})

// simple query
connection.query(
    "SELECT * FROM notes",
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);