const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {};

  res.render("landing", data);
});

module.exports = router;
