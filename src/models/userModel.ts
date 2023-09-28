// src/models/userModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  user_id: number;
  user_name: string;
  // Add other user fields here
}

const userSchema = new Schema<User>({
  user_id: { type: Number, required: true, unique: true },
  user_name: { type: String, required: true },
  // Define other user fields here
});

export default mongoose.model<User>("User", userSchema);
