const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    greeting: "Hello Welcome to my portfolio site!",
  };

  res.render("landing", data);
});

module.exports = router;
