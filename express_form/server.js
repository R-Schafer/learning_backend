const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.set("view engine", "ejs");
// must include line below to access the body
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);

app.listen(3000);
