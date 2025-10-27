import crypto from 'crypto';
import { google } from 'googleapis';
import User from '../models/User.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const ACCESS_COOKIE = 'access_token';
const REFRESH_COOKIE = 'refresh_token';
const STATE_COOKIE = 'oauth_state';

const opts = { httpOnly: true, sameSite: 'lax', secure: false, path: '/' };

export async function googleAuthStart(req, res) {
  const state = crypto.randomBytes(16).toString('hex');
  res.cookie(STATE_COOKIE, state, opts);
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['openid', 'email', 'profile'],
    state
  });
  res.redirect(url);
}

export async function googleAuthCallback(req, res) {
  try {
    const { code, state } = req.query;
    if (state !== req.cookies[STATE_COOKIE]) return res.redirect(process.env.FRONTEND_FAILURE_URL);
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data: profile } = await oauth2.userinfo.get();

    let user = await User.findOne({ email: profile.email });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email: profile.email,
        name: profile.name,
        picture: profile.picture
      });
    }

    const access = signAccessToken({ id: user._id, role: user.role });
    const refresh = signRefreshToken({ id: user._id });

    res.cookie(ACCESS_COOKIE, access, opts);
    res.cookie(REFRESH_COOKIE, refresh, { ...opts, maxAge: 30 * 86400000 });
    res.redirect(process.env.FRONTEND_SUCCESS_URL);
  } catch (e) {
    console.error(e);
    res.redirect(process.env.FRONTEND_FAILURE_URL);
  }
}

export async function refresh(req, res) {
  try {
    const r = req.cookies[REFRESH_COOKIE];
    const payload = verifyRefreshToken(r);
    const access = signAccessToken({ id: payload.id });
    res.cookie(ACCESS_COOKIE, access, opts);
    res.json({ ok: true });
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}

export async function logout(req, res) {
  res.clearCookie(ACCESS_COOKIE);
  res.clearCookie(REFRESH_COOKIE);
  res.clearCookie(STATE_COOKIE);
  res.json({ ok: true });
}
