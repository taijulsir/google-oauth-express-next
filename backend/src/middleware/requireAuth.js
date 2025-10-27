import { verifyAccessToken } from '../utils/jwt.js';
export function requireAuth(req, res, next) {
  try {
    const token = req.cookies['access_token'];
    if (!token) return res.status(401).json({ message: 'Not authenticated' });
    req.user = verifyAccessToken(token);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid/expired token' });
  }
}
