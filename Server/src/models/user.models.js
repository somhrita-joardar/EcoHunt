import mongoose from "mongoose";
import bcrype from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
  points: { type: Number, default: 0 },
  flags: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [{ type: String }], // array of badge names or ids
  createdAt: { type: Date, default: Date.now },
});



userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) return next();

  this.password = await bcrype.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrype.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      fullName: this.fullName,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
