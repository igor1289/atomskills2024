const express = require("express");

require("dotenv").config();

const path = "app/views/";
const app = express();

app.use(express.static(path));

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`server started at port=${process.env.PORT}`);
});
