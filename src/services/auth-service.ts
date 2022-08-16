import {User} from "../models/user";
import bcrypt from 'bcryptjs';

function createHashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

export async function regUser(newUser) {
    try {
        const user = await new User({
            username: newUser.username,
            fullName: newUser.fullName,
            mobile: newUser.mobile,
            email: newUser.email,
            regDate: new Date(),
            logDate: new Date(),
            hashPassword: createHashPassword(newUser.password),
            // Password: newUser.Password,
        });
        await user.save();
         console.log(user.username) ;
    } catch (err: any) {
        return {message: err.message}
    }
}
