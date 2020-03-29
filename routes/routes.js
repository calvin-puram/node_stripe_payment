const express = require("express");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: "Beat By God",
        description: "Sound of an African Gong",
        images: [
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        ],
        amount: 500,
        currency: "usd",
        quantity: 1
      }
    ],
    customer_email: "puram.calvin@gmail.com",
    success_url: "http://localhost:8080/book_success/:session_id",
    cancel_url: "http://localhost:8080"
  });

  res.status(200).json({
    success: true,
    data: session
  });
});

module.exports = router;
