const express = require("express");
require("dotenv").config();
const { format } = require("date-fns");
const path = require("node:path");
const newRouter = require("./routes/new");
const messages = require("./db/data");
const app = express();
const assetPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message board",
    messages: messages,
    format: format,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
