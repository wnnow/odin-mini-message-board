const db = require("../db/queries");
const { format } = require("date-fns");

async function getUsernames(req, res) {
  try {
    const users = await db.getAllUsernames();
    res.render("index", {
      title: "Mini Message board",
      users: users,
      format: format,
    });
  } catch (error) {
    console.error("Error fetching usernames:", error);
    console.error(error);
    res.status(500);
  }
}

async function insertUser(req, res) {
  try {
    const { username, message } = req.body;

    await db.insertUser(username, message);
    res.redirect("/");
  } catch (error) {
    console.error("Insert Controller error: ", error);
  }
}

module.exports = {
  getUsernames,
  insertUser,
};
