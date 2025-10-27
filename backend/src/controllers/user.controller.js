import User from '../models/User.js';
export async function me(req, res) {
  const user = await User.findById(req.user.id).lean();
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { _id, email, name, picture, role, onboardingDone } = user;
  res.json({ id: _id, email, name, picture, role, onboardingDone });
}
