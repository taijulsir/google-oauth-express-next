import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  provider: { type: String, default: 'google' },
  googleId: { type: String },
  email: { type: String, required: true, unique: true },
  name: String,
  picture: String,
  role: { type: String, default: 'user' },
  onboardingDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('User', userSchema);
