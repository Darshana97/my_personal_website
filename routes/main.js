const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    greeting: "Hello Welcome to my portfolio site!",
    introduction: "I am web developer from Kandy",
    languages: [
      {name: 'javascript', years: 3},
      {name: 'Angular', years: 2},
      {name: 'NodeJS', years: 2},
      {name: 'AWS', years: 1},
      
    ]
  };

  res.render("landing", data);
});

module.exports = router;
