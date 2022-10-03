const express = require("express");
const router = express.Router();
const users = [];

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(users);
    res.send(`get user id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user id: ${req.params.id}`);
  });

module.exports = router;
