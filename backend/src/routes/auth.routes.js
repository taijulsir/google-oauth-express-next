import { Router } from 'express';
import { googleAuthStart, googleAuthCallback, refresh, logout } from '../controllers/auth.controller.js';
const router = Router();
router.get('/google', googleAuthStart);
router.get('/google/callback', googleAuthCallback);
router.post('/refresh', refresh);
router.post('/logout', logout);
export default router;
