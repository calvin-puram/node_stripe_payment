const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const appRoute = require("./routes");

const app = express();

app.use("/api/v1/book_sale", appRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
