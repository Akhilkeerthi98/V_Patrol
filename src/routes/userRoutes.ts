// src/routes/userRoutes.ts
import express from "express";
import { createUser, getUser } from "../controllers/userController";

const router = express.Router();

// Create a new user or update existing user data
router.post("/user", createUser);

// Read user data
router.get("/user/:user_id", getUser);

export default router;
