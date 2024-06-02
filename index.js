import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/newpost", (req, res) => {
    res.render("newpost.ejs");
  });



  app.post("/submit", (req, res) => {
    const posttitle = req.body["name"];
    const postbody= req.body["body"];

    res.render("index.ejs",  { 
        title: posttitle ,
        body: postbody,
    });
    
  });





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

