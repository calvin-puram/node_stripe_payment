const express = require("express");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const appRoute = require("./routes/routes");
const booksRoute = require("./routes/booksRoutes");

const app = express();
app.use(express.json());

app.use("/api/v1/book_sale", appRoute);
app.use("/api/v1/books", booksRoute);

module.exports = app;
