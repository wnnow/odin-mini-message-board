const router = require("express").Router();
const { format } = require("date-fns");
const usersController = require("../controllers/usersControllers");

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

router.post("/", usersController.insertUser);

module.exports = router;
