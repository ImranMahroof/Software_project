import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'driver'],
    default: 'driver',
    required: true
  }
});

const User = models.User || mongoose.model("User", userSchema);

export default User;