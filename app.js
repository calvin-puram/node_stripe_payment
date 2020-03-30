const express = require("express");
const path = require("path");
const cors = require("cors");

const appRoute = require("./routes/routes");
const booksRoute = require("./routes/booksRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/checkout", appRoute);
app.use("/api/v1/books", booksRoute);

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.join(__dirname, "./public")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
  });
}

module.exports = app;
