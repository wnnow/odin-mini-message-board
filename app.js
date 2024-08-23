const express = require("express");
const dotenv = require("dotenv").config();
const path = require("node:path");
const newRouter = require("./routes/new");
const messages = require("./db/data");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message board", messages: messages });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
