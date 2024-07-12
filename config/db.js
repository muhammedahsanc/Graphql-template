const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "user@123",
  database: process.env.DB_NAME || "diastest",
  port: process.env.DB_PORT || 3306,
};

const pool = mysql.createPool(config);

async function poolConnect() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to MySQL!");
    connection.release();
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    throw err;
  }
}

module.exports = { pool, poolConnect };
