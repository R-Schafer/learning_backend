const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    if (req.session.user) {
      res.redirect("/user");
    } else {
      res.render("login", { message: "" });
    }
  })
  .post("/", (req, res) => {
    const users = req.app.locals.users;
    // authenticate user
    // check user email
    if (users.has(req.body.email)) {
      const user = users.get(req.body.email);
      // check user password
      if (user.password === req.body.password) {
        // set cookie session
        req.session.user = user;
        res.redirect("/user");
      } else {
        res.render("login", { message: "Invalid password" });
      }
    } else {
      res.render("login", { message: "Email not found" });
    }
  });

module.exports = router;
