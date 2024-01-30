const mongoose  = require('mongoose');
const express = require("express");
const uri = "mongodb://127.0.0.1:27017/Courses";

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
            cohort: Number,
            college: String,
            semester: Number,
            averageRating: Number,
            studentsVoted: Number,
          },
        ],
      });
const CoursesDocument = mongoose.model("Subjects", CourseSchema);   

app.get("/courses", async (req, res) => {
        try {
          const doc = await CoursesDocument.findOne();
          res.json(doc.cse);
        } catch (error) {
          res.status(500).send(error);
        }
      });