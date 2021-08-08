const express = require('express');
const app = express()
const path = require('path');
// const ss = require('./db'); // connection to data base
require('./employeeData');

const port = 3000

const staticPath = path.join(__dirname, '../frontend');

app.use(express.static(staticPath));

// app.get("/", (req,res) =>{
//   console.log("success");
//   // res.render("index");
//   res.status(200).render("index");
//   res.send("page found successfully");
// })

app.post("/employeeRegister", (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
