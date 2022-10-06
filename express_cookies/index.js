const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.set("Set-Cookie", "name=rainey");
  res.redirect("/cookie");
});

app.get("/cookie", (req, res) => {
  const keyValue = req.get("cookie");
  const value = keyValue.split("=");
  console.log(value[1]);
  res.send(`${value[1]}`);
});

app.listen(5000);
