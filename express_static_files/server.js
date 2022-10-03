const express = require("express");
const app = express();

// this line allows the server to read everything in the public folder
app.use(express.static("public"));

app.listen(3000);
