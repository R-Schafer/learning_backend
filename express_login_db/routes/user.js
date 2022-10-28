import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("user", {
      text:
        req.session.user.username[0].toUpperCase() +
        req.session.user.username.substring(1),
    });
  } else {
    res.redirect("/login");
  }
});

export default router;
