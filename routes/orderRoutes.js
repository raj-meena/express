// routes/orderRoutes.js
import { Router } from "express";
const router = Router();
import { getAllOrders } from "../controllers/orderController";

router.get("/orders", getAllOrders);

export default router;
