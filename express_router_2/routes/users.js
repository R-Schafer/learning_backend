const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("user new form");
});

// make sure static routes are above dynamic routes
router
  .route("/:id")
  .get((req, res) => {
    res.send(`get user id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user id: ${req.params.id}`);
  });

module.exports = router;
