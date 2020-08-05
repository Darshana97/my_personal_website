const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    image_profile: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FBillGates%2F&psig=AOvVaw20tHUl8uerjPmZeVdVUrHd&ust=1596734876648000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjh5IvLhOsCFQAAAAAdAAAAABAD',
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
