const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    image_profile: 'https://www.google.com/search?q=google+owner&tbm=isch&ved=2ahUKEwiNha_bi4LrAhVx1nMBHVy7D5cQ2-cCegQIABAA&oq=google+owner&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BggAEAcQHlCU_RRYqIYVYPqMFWgAcAB4AIABsQKIAYUJkgEHMC40LjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=O50pX837GPGsz7sP3Pa-uAk&bih=937&biw=1920&safe=strict#imgrc=g5-P76h3rO8J6M',
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
