import { Router, Response } from 'express';
import { register, login } from '../controllers/authController';
import { authenticateToken, AuthRequest } from '../middleware/authMiddleware';

const router = Router();

// Public routes
router.post('/register', register as any);  // Type assertion to resolve overload issue
router.post('/login', login as any);  // Type assertion to resolve overload issue

// Protected route example
router.get('/profile', authenticateToken as any, (req: AuthRequest, res: Response) => {
  res.json({
    message: 'Protected profile route',
    user: req.user
  });
});

export default router;