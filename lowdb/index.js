import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file
await db.read();

// Set default data
db.data = db.data || { users: {} };

// Create and query items using plain JS
db.data.users["rainey"] = {
  name: "rainey",
  email: "rainey@gmail.com",
  id: 456,
};

// Add content to file
await db.write();

// Delete conftent from file
delete db.data.users["rainey"];

// Save changes back to file
await db.write();
