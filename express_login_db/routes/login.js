import { Router } from "express";
const router = Router();

router
  .get("/", (req, res) => {
    if (req.session.user) {
      res.redirect("/user");
    } else {
      res.render("login", { message: "" });
    }
  })
  .post("/", async (req, res) => {
    // declare db and check info inside
    const db = req.app.locals.db;
    await db.read();

    // authenticate user
    if (db.data.users[req.body.email]) {
      const user = db.data.users[req.body.email];
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

export default router;
