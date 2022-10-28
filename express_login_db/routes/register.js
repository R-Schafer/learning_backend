import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router
  .get("/", (req, res) => {
    res.render("register", { message: "" });
  })
  .post("/", async (req, res) => {
    // declare db and check info inside
    const db = req.app.locals.db;
    await db.read();

    // check if user already exists
    if (db.data.users[req.body.email]) {
      res.render("register", { message: "Existing user, please login" });
    } else {
      const user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        id: uuidv4(),
      };

      // add user to db
      db.data.users[user.email] = user;
      await db.write();

      // set cookie
      req.session.user = user;
      res.redirect("/user");
    }
  });

export default router;
