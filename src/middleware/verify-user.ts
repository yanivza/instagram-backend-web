import {verify} from 'jsonwebtoken';
import { getUserById } from '../services/auth-service';

const secret = process.env.TOKEN_SECRET



async function verifyUser(req, res, next) {
    const token = req.cookies.token;
    console.log(token)
    try {
        const verification = verify(token, secret)
        console.log(verification)
        const userId = verification.user._id
        console.log(userId)
        const user = await getUserById(userId)
        .catch((res)=>{console.log(res)});
        if (!user) {
            return res.status(401).send({ message: 'you are not authorized' });
        }
        req.user = user;

        next();
    } catch(err) {
        res.clearCookie('token')
        console.log(err)
        res.status(401).send('this is the real unauth!')
    }

}
export default verifyUser