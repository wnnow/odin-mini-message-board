const pool = require("./pool");

async function getAllUsernames() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error("Error fetching usernames:", error);
    throw new Error("Could not retrieve usernames");
  }
}

async function insertUser(username, message) {
  try {
    await pool.query(
      "INSERT INTO messages (username, message) VALUES ($1, $2)",
      [username, message]
    );
  } catch (error) {
    console.error("Error inserting user:", error);
    throw new Error("Could not insert user");
  }
}

module.exports = {
  getAllUsernames,
  insertUser,
};
