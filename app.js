const express = require("express");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const appRoute = require("./routes/routes");

const app = express();

app.use("/api/v1/book_sale", appRoute);

module.exports = app;
