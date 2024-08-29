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

module.exports = {
  getUsernames,
};
