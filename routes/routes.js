const express = require("express");
const Books = require("../models/Books");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const router = express.Router();

router.route("/:id").post(async (req, res) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    return res.status(400).json({
      success: "fail",
      msg: "no tour found"
    });
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: book.name,
        description: book.description,
        images: [
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        ],
        amount: 500,
        currency: "usd",
        quantity: 1
      }
    ],

    success_url: `http://localhost:8080/checkout_success/${book._id}`,
    cancel_url: "http://localhost:8080"
  });

  res.status(200).json({
    success: true,
    data: session
  });
});

module.exports = router;
