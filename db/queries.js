const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertUser(username, message) {
  await pool.query("INSERT INTO message (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

module.exports = {
  getAllUsernames,
  insertUser,
};
