const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user : 'user',
        password : 'MySql2019!',
        database : 'playlistsMusic',
        timezone: 'local', 
        dateStrings: [
            'DATE', "DATETIME"
        ]
    }
);

module.exports = connection;
