const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    otp: { type: String },
    otpExpiry: { type: Date },
    photo: { type: String, default: "./profile_photo.png" },
    sessions: [
      {
        sessionId: { type: String },
        createdAt: { type: Date, default: Date.now },
        expiresAt: { type: Date }, // Expiry time for the session
      },
    ],
    resetPasswordToken: { type: String }, // Field for storing the hashed reset token
    resetPasswordExpiry: { type: Date }, // Field for storing the token expiry time
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);
