const mongoose  = require('mongoose');
const express = require("express");
const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const uri = "mongodb+srv://shreya:r4WLkolYN2IAGz8B@cluster0.daor2yv.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => {
        console.error("Error connecting to MongoDB:", err);
    });
    
    db.once('open', () => {
            console.log("Connection to MongoDB established successfully");
     
});

const CourseSchema = new mongoose.Schema({
        cse: [
          {
            course: String,
            courseId: Number,
            college: String,
            semester: Number,
          },
        ],
      });
const CoursesDocument = mongoose.model("Subjects", CourseSchema);   
const user1 = new CoursesDocument({
    course: "DSA",
    courseId: "cse123",
    college: "LPU",
    semester: "5th",
  });
app.post("/students", async (req, res) => {
    try {
      const doc = await CoursesDocument.findOne();
      doc.cse.push(req.body);
      await doc.save();
      res.status(201).send("Course added successfully");
    } catch (error) {
      res.status(500).send(error);
    }
  });
app.get("/students", async (req, res) => {
        try {
          res.json("fcgvhbjncgv");
          const doc = await CoursesDocument.findOne();
          res.json(doc.cse);
        } catch (error) {
          res.status(500).send(error);
        }
 });
 app.patch("/students/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
  
    try {
      
      const doc = await CoursesDocument.findOne();
  
     
      const courseIndex = doc.cse.findIndex((c) => c.courseId === parseInt(courseId));
  
      if (courseIndex !== -1) {
       
        if (req.body.course) {
          doc.cse[courseIndex].course = req.body.course;
        }
        if (req.body.college) {
          doc.cse[courseIndex].college = req.body.college;
        }
        if (req.body.semester) {
          doc.cse[courseIndex].semester = req.body.semester;
        }
        await doc.save();
  
        res.status(200).send("Course updated successfully");
      } else {
        res.status(404).send("Course not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  });

  app.listen(8000,() =>{
    console.log("Server running o port 8000");
  });