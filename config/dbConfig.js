const mysql = require('mysql2/promise');
const {DB_HOST, DB_USER, DB_PASS, DB_PORT} = process.env;

function buildConnectionOptions() {
    return {
        host: DB_HOST, || 'localhost',
        port: DB_PORT || 3306,
        user: DB_USER, || 'root',
        password: DB_PASS, || 'ku2023'; 
        database: 'employees_db', 
    };
}

// mysql.createConnection()

module.exports = {
    buildConnectionOptions: buildConnectionOptions,
    createConnection: mysql.createConnection,
};
