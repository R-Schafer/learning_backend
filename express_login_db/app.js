import express from "express";
import { mkdir } from "fs/promises";
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import cookieSession from "cookie-session";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 3000;

// temp directory
const rootDirectory = dirname(fileURLToPath(import.meta.url));
const tmpDirectory = join(rootDirectory, "tmp");

// database file
const dbFile = join(tmpDirectory, "db.json");

// Use JSON file for storage
const db = new Low(new JSONFile(dbFile));

// create tmp directory
await mkdir(tmpDirectory, { recursive: true });

// read db file, create if not exist
await db.read();
db.data = db.data || { users: {} };
await db.write();

// make db global
app.locals.db = db;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ secret: "secret" }));
app.use(express.json());
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/user", userRouter);

app.get("/", async (req, res) => {
  res.redirect("/login");
});

app.post("/logout", async (req, res) => {
  req.session = null;
  res.redirect("/login");
});

app.post("/delete", async (req, res) => {
  const user = req.session.user;
  if (user) {
    const db = req.app.locals.db;
    await db.read();

    delete db.data.users[user.email];
    await db.write();

    req.session = null;
  }

  res.redirect("/login");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
