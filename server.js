// server.js
import express, { json } from "express";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(cors());
app.use(json());
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
