import express from 'express';
import {login, register, userInfo} from '../controllers/auth-controller'
import verifyUser from "../middleware/verify-user";

const router = express.Router();

// router.get('/api/setcookie',  (req, res) => {
//     res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
//         maxAge: 5000,
//         // expires works the same as the maxAge
//         expires: new Date('01 12 2021'),
//         secure: true,
//         httpOnly: true,
//         sameSite: 'lax'
//     });
//     res.send('Cookie have been saved successfully');
// });

router.post('/api/login',login);
router.post('/api/register', register);
router.post('/api/user-info',verifyUser, userInfo); // need middleware to auth the user
// logout

export default router;