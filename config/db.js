// config/db.js
import { createConnection } from "mysql";

const db = createConnection({
  host: "localhost",
  user: "telemart_host",
  password: "Telemart@321",
  database: "teleinc_adminpanel",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

export default db;
