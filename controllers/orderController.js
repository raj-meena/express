// controllers/orderController.js
import db from "../config/db";

export function getAllOrders(req, res) {
  db.query("SELECT * FROM count_order_tbl", (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(rows);
  });
}
