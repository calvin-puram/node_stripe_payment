const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
