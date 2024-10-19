const express = require("express");
const app = express();
const PORT = 5001;
// const bodyParser=require("body-parser");

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

app.post("/register", (req, res) => {
  res.send("Hello");

  // const name =req.body.name;
  // res.send(`Welcome ${name}`)
});
// app.get("/", (req, res) => {
// //    const id= req.query.id;
// //    const name= req.query.name;
// //   res.send(`<h1>Student name is: ${name}, Id is: ${id}</h1>`);
// });
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
