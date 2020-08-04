const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    image_profile: 'https://www.google.com/search?q=amazon+owner&safe=strict&sxsrf=ALeKk00JHjuZ_ZeviQi9ZVI5rOWyOA7o_Q:1596562739392&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiytMXXi4LrAhWa73MBHabHDtwQ_AUoAXoECA8QAw&biw=1920&bih=937#imgrc=b3XGJTGi6WRwlM',
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
