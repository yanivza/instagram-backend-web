import express from 'express';
import {login, register, userInfo} from '../controllers/auth-controller'
import verifyUser from "../middleware/verify-user";

const router = express.Router();


router.post('/api/login', verifyUser, login);
router.post('/api/register', register);
router.post('/api/user-info',verifyUser, userInfo); // need middleware to auth the user
// logout

export default router;