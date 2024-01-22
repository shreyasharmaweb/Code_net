import express from "express";
// import fs from "fs/promises";  // Using fs.promises for asynchronous file reading
const app = express();
const port = 8001;

console.log("object")
// async function readJsonFile(filePath) {
//   try {
//     const content = await fs.readFile(filePath, 'utf8');
//     return JSON.parse(content);
//   } catch (error) {
//     console.error(`Error reading JSON file: ${filePath}`, error);
//     throw error;
//   }
// }


// const packageJsonPath = './package.json';
// const someOtherJsonPath = './someOtherJsonFile.json';

// let packageJson, someOtherJson;


// try {
//   packageJson = await readJsonFile(packageJsonPath);
//   console.log(packageJson);
// } catch (error) {
//   console.error(`Error reading package.json file: ${error.message}`);
// }

app.use(express.json());


let detail = {
  coders: [
    {
      Name: "Shreya",
      Uni: "LPU",
      Leetcode_profile: "",
      gfg_profile: "",
      Rank_on_gfg: 1909,
      Rank_on_leetcode:30000,
      Skills: ["java","react","mongo_db","js"],
      Projects: ["calender","coder_net","RTS","Websites"],
    },
    {
      Name: "sachin",
      Uni: "LPU",
      Leetcode_profile: "",
      gfg_profile: "",
      Rank_on_gfg: 1400,
      Rank_on_leetcode:30000,
      Skills: ["c++","html","css"],
      Projects: ["clock","rts"],
    },
    {
      Name: "rahul",
      Uni: "LPU",
      Leetcode_profile: "",
      gfg_profile: "",
      Rank_on_gfg: 1500,
      Rank_on_leetcode:30000,
      Skills: ["verbal","english"],
      Projects: ["trading"],
    },
    {
      Name: "Divya",
      Uni: "LPU",
      Leetcode_profile: "",
      gfg_profile: "",
      Rank_on_gfg: 130900,
      Rank_on_leetcode:10000,
      Skills: ["web","java"],
      Projects: ["word_clock","excel"],
    },
  ],
};

app.get("/detail", (req, res) => {
  res.json(detail.coders);
});

app.post("/detail", (req, res) => {
  detail.coders.push(req.body);
  res.send("Course added");
});

app.get("/checkRankMatch", (req, res) => {
  const minRank = 1000;
  const maxRank = 5000;

  
  const matchingCoders = detail.coders.filter(coder => coder.Rank_on_gfg >= minRank && coder.Rank_on_gfg <= maxRank);

  if (matchingCoders.length > 0) {
   
    res.status(200).json({
      message: "Match found",
      matchingCoders: matchingCoders
    });
  } else {
    res.status(404).json({
      message: "No match found"
    });
  }
});
app.get("/detail/:coderName", (req, res) => {
  const coderName = req.params.coderName;


  const coder = detail.coders.find(coder => coder.Name === coderName);

  if (coder) {
    
    res.status(200).json({
      projects: coder.Projects
    });
  } else {
    res.status(404).json({
      message: "Coder not found"
    });
  }
});
app.get("/skills/:coderName", (req, res) => {
  const coderName = req.params.coderName;


  const coder = detail.coders.find(coder => coder.Name === coderName);

  if (coder) {
    
    res.status(200).json({
      Skill: coder.Skills
    });
  } else {
    res.status(404).json({
      message: "Coder not found"
    });
  }
});

app.get("/details/:uni", (req, res) => {
 console.log("in detail Uni")
 let uni = req.params;
 console.log("UNI: ",uni)
 
  const matchingCoders = detail.coders.filter(coder => coder.Uni === uni);

  if (matchingCoders.length > 0) {
   
    res.status(200).json({
      message: "Coders found",
      coders: matchingCoders
    });
  } else {
    res.status(404).json({
      message: "No coders found for the specified university"
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
