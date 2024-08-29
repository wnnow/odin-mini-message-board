const router = require("express").Router();
const { format } = require("date-fns");

router.get("/", (req, res) => {
  res.render("form", { title: "Mini Message Board" });
});

router.get("/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", {
      title: "Message Detail",
      message: message,
      format: format,
    });
  } else {
    res.status(404).send("Message not found");
  }
});

router.post("/", (req, res) => {
  const user = req.body.messageUser;
  const message = req.body.messageText;
  messages.push({
    user: user,
    text: message,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
