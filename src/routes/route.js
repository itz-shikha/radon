const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();



router.get('/movies', function(req, res){
 let movies = ['bird  box','Beauty and the beast']
 res.send(movies)
})



router.get("/movies/:indexNumber", function (req, res) {
    // list of movie is response by index id
    const movie = [
      "Rang de basanti",
      "The shining",
      "Lord of the rings",
      "Batman begins",
    ];
  
    if (req.params.index >= movie.length) {
      console.log("use a valid index");
      res.send("use a valid index");
    }
    const i = req.params.indexNumber;
    res.send(movie[i]);
  });
  

  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];
  

  router.get("/films", function (req, res) {
    res.send(films);
  });
  
  

  
router.get("/films/:filmid", function (req, res) {
    // films accessing using filmid
    const films = [
      {
        id: 1,
        name: "The Shining",
      },
      {
        id: 2,
        name: "Incendies",
      },
      {
        id: 3,
        name: "Rang de Basanti",
      },
      {
        id: 4,
        name: "Finding Nemo",
      },
    ];
    if (req.params.filmid >= 5 || req.params.filmid) {
      res.send("No movie exists with this id");
    }
    const i = req.params.filmid - 1;
  
    res.send(films[i]);
  });



  // router.get("/candidates", function (req, res) {
//   console.log(
//     "Query paramters for this request are " + JSON.stringify(req.query)
//   );
//   let gender = req.query.gender;
//   let state = req.query.state;
//   let district = req.query.district;
//   console.log("State is " + state);
//   console.log("Gender is " + gender);
//   console.log("District is " + district);
//   let candidates = ["Akash", "Suman"];
//   res.send(candidates);
// });

// router.get("/candidates/:canidatesName", function (req, res) {
//   console.log("Candidates name is " + req.params.canidatesName);
//   res.send("Done");
// });



//   router.get("/sol1", function (req, res) {
//     let arr = [1, 2, 3, 5, 6, 7];
//     let n = arr[arr.length - 1];
//     let sumOfArray = arr.reduce(function (add, curr) {
//       add = add + curr;
//       return add;
//     }, 0);
//     let sumOfSequence = (n * (n + 1)) / 2;
//     let missingNumber = sumOfSequence - sumOfArray;
//     res.send("The missing number is: " + missingNumber);
//   });
  
//   router.get("/sol2", function (req, res) {
//     let arr = [33, 35, 36, 37, 38];
//     let last = arr[arr.length - 1];
//     let first = arr[0];
  
//     let n = arr.length + 1; // last - first + 1;
//     console.log(first, last, n);
//     let sumOfArray = arr.reduce(function (add, curr) {
//       add += curr;
//       return add;
//     }, 0);
//     console.log(sumOfArray);
//     let sumOfSequence = (n * (first + last)) / 2;
//     console.log(sumOfSequence);
//     let missingNumber = sumOfSequence - sumOfArray;
//     res.send("The missing number is: " + missingNumber);
//   });

module.exports = router;
// adding this comment for no reason