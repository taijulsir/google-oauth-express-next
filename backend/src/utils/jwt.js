import jwt from 'jsonwebtoken';
export const signAccessToken = (payload) =>
  jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRES });
export const signRefreshToken = (payload) =>
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRES });
export const verifyAccessToken = (t) => jwt.verify(t, process.env.JWT_ACCESS_SECRET);
export const verifyRefreshToken = (t) => jwt.verify(t, process.env.JWT_REFRESH_SECRET);
