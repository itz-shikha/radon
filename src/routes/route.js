const express = require('express');
const router = express.Router();




let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "Gopal",
    dob: "1/12/1992",
    gender: "male",
    city: "Indore",
    sports: ["singing"],
  },
  {
    name: "Rahi",
    dob: "1/06/1992",
    gender: "female",
    city: "Mumbai",
    sports: ["dancing"],
  },
];

router.post("/players", function (req, res) {
  let newPlayer = req.body;
  let result = players.find((x) => x.name == newPlayer.name);
  if (result == undefined) {
    players.push(newPlayer);
    res.send(players);
  } else res.send("Player with the same name is already exist");
});

module.exports = router;
