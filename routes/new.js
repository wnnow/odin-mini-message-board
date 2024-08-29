const router = require("express").Router();
const { format } = require("date-fns");
const usersController = require("../controllers/usersControllers");

router.get("/", (req, res) => {
  res.render("form", { title: "Mini Message Board" });
});

router.get("/:id", usersController.findMessage);

router.post("/", usersController.insertUser);

module.exports = router;
