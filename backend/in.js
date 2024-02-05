const express = require("express");
//import express from "express";
const app = express();
const port = 8001;

// Middleware to parse JSON body in requests
app.use(express.json());

// In-memory "database"
let details = {
  coder: [
    {
      Username:"shreya",
      University:"LPU",
      Language :"Java",
      Rank_on_gfg:"1400",
      Rank_on_Leetcode:"600000",
      Projects:[]
    },
    {
      Username:"sha",
      University:"LPU",
      Language :"Java",
      Rank_on_gfg:"1400",
      Rank_on_Leetcode:"600000",
      Projects:[]
    },
    {
      Username:"shre",
      University:"LPU",
      Language :"Java",
      Rank_on_gfg:"1400",
      Rank_on_Leetcode:"600000",
      Projects:[]
    },
    {
      Username:"reya",
      University:"LPU",
      Language :"Java",
      Rank_on_gfg:"1400",
      Rank_on_Leetcode:"600000",
      Projects:[]
    },
  ],
};

// GET - List all coders
app.get("/details", (req, res) => {
  res.json(details.coder);
});

// GET - Details of a specific course by name
app.get("/details/:Language", (req, res) => {
  const course = details.coder.find((c) => c.Language === req.params.Language);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json(course);
  }
});

// GET - Average rating of a specific course
app.get("/details/:Language/Rank_on_gfg", (req, res) => {
  const course = details.coder.find((c) => c.Language === req.params.Language);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json({ Rank_on_gfg: course.Rank_on_gfg });
  }
});

// POST - Create a new course
app.post("/details", (req, res) => {
  details.coder.push(req.body);
  res.send("Course added");
});

// POST - Add a rating to a course
// app.post("/courses/:courseName/rating", (req, res) => {
//   const course = courses.cse.find((c) => c.course === req.params.courseName);
//   if (!course) {
//     res.status(404).send("Course not found");
//   } else {
//     const rating = req.body.rating;
//     course.averageRating =
//       (course.averageRating * course.studentsVoted + rating) /
//       (course.studentsVoted + 1);
//     course.studentsVoted++;
//     res.send("Rating updated");
//   }
// });

// // PUT - Modify information of a course
// app.put("/courses/:courseName", (req, res) => {
//   const index = courses.cse.findIndex(
//     (c) => c.course === req.params.courseName
//   );
//   if (index === -1) {
//     res.status(404).send("Course not found");
//   } else {
//     courses.cse[index] = { ...courses.cse[index], ...req.body };
//     res.send("Course updated");
//   }
// });

// app.get("/*", (req, res) => {
//   res.send("You are on worng route. Here's the list of possible routes");
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
