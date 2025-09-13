import express from "express";
import { getUsers } from "../controllers/UserControllers.js";

const router = express.Router();

router.get("/data", getUsers);

export const userRoutes = router;