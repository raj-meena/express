// import express from "express";

// const app = express();
// const port = 9000;
// app.use("/", (req, res) => {
//   res.json({ message: "Hello From Express App" });
// });

// app.listen(9000, () => {
//   console.log(`Starting Server on Port ${port}`);
// });

// server.js
import express, { json } from "express";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(cors());
app.use(json());

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

app.use("/api", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
