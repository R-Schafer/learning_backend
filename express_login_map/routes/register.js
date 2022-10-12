const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

router
  .get("/", (req, res) => {
    res.render("register", { message: "" });
  })
  .post("/", (req, res) => {
    // check if user already exists
    const users = req.app.locals.users;
    if (users.has(req.body.email)) {
      res.render("register", { message: "Existing user, please login" });
    } else {
      const user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        id: uuidv4(),
      };

      // add user to Map
      users.set(user.email, user);

      // set cookie
      req.session.user = user;
      res.redirect("/user");
    }
  });

module.exports = router;
