const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.set("Set-Cookie", "cookieId=imACookie123");
  res.redirect("/redirect");
});

app.get("/redirect", (req, res) => {
  console.log(req.get("cookie"));
});

app.listen(4000);
