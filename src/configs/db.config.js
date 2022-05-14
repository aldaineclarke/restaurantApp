const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

// Connects to the database with the credentials provided.
db.connect((error)=>{
    if(error) throw error;
    console.log("database connection established");
});

module.exports = db;