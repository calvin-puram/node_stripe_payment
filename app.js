const express = require("express");
const cors = require("cors");

const appRoute = require("./routes/routes");
const booksRoute = require("./routes/booksRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/checkout", appRoute);
app.use("/api/v1/books", booksRoute);

module.exports = app;
