const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.get('/', function(req, res) {
  res.send("Working");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.send("email = "+email+", password = "+password);
})

app.post("/signup", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  const email = req.body.email;
  const password = req.body.password;
  res.send("email = "+email+", password = "+password+", first = "+first+", last = "+last);
})
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});