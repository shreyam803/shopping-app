const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Mylifeline',{
    dialect: 'mysql',
     host:'localhost'
    });

module.exports = sequelize;




// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Mylifeline'
// })

// module.exports = pool.promise();

