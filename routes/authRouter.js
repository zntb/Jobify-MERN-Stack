import { Router } from 'express';
const router = Router();

import { register, login } from '../controllers/authController.js';
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', login);

export default router;
