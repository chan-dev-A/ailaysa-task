const mySql = require('mysql2/promise');


const mySqlPool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'boxes_db',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

module.exports = mySqlPool;