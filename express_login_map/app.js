const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3000;

app.locals.users = new Map();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ secret: "secret" }));
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/user", userRouter);
app.use(express.json());

// log out user
app.post("/logout", (req, res) => {
  const users = app.locals.users;
  req.session = null;
  res.redirect("/login");
});

// delete user
app.post("/delete", (req, res) => {
  const users = app.locals.users;
  const user = req.session.user;

  if (users.has(user.email)) {
    users.delete(user.email);
    req.session = null;
    res.redirect("/login");
  } else {
    return null;
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
