require("dotenv").config();

const { Pool } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});
async function checkActiveDatabase() {
  const { rows } = await pool.query("SELECT current_database();");
  console.log("Connected to database:", rows[0].current_database);
}

checkActiveDatabase();
async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}
getPgVersion();

module.exports = pool;
