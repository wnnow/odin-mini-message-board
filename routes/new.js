const router = require("express").Router();
const messages = require("../db/data");

router.get("/", (req, res) => {
  res.render("form", { title: "Mini Message Board" });
});

router.post("/", (req, res) => {
  const user = req.body.messageUser;
  const message = req.body.messageText;

  messages.push({
    user: user,
    message: message,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
