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

async function findMessage(userId) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE id = ($1)",
      [userId]
    );
    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Could not find user");
  }
}

module.exports = {
  getAllUsernames,
  insertUser,
  findMessage,
};
