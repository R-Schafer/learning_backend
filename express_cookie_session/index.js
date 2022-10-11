const express = require("express");
const cookieSession = require("cookie-session");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ secret: "secret" }));

app.get("/", (req, res) => {
  if (req.session.name) {
    res.send(`Hi, ${req.session.name}`);
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <form method="POST" action="/login">
          <input title="name" type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>  
  `);
});

app.post("/login", (req, res) => {
  // if user and pass valid
  if (req.body.name == "rainey") {
    req.session.name = "rainey";
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.listen(3000);
