import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { me } from '../controllers/user.controller.js';
const router = Router();
router.get('/me', requireAuth, me);
export default router;
