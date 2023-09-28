// src/controllers/userController.ts
import { Request, Response } from "express";
import User from "../models/userModel";

// Create a new user or update existing user data
export const createUser = async (req: Request, res: Response) => {
  try {
    const { user_id, user_name, ...otherFields } = req.body.data;
    let user = await User.findOne({ user_id });

    if (!user) {
      user = new User({
        user_id,
        user_name,
        ...otherFields,
      });
    } else {
      // Update user data here
      // You can add logic to update existing user data
    }

    await user.save();
    res.status(200).json({ message: "User created/updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read user data
export const getUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ user_id });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
