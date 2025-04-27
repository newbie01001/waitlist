import { Router, Request, Response, NextFunction } from 'express';
import { addUserToWaitlist, addBusinessToWaitlist } from '../controllers/waitlistController';

const router = Router();

// User waitlist route
router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addUserToWaitlist(req, res);
  } catch (error) {
    next(error);
  }
});

// Business waitlist route
router.post('/business', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addBusinessToWaitlist(req, res);
  } catch (error) {
    next(error);
  }
});

export default router; 