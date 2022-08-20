import {User} from "../models/user";
import bcrypt from 'bcryptjs';
import {Error} from "mongoose";

function createHashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

// function getUserByUsernameAndPassword(username, password) {
//    const users =
//     return getUsers().find(user => {
//         return username === user.username && password === user.password;
//     })
// }

export async function handleLogin(username: string, password: string) {
    try {
        const user: any = await User.findOne({username: username});
        const isValid = await bcrypt.compare(password, user.hashPassword)
        if (isValid) {
            return user.username;
        }
         throw "Username and password not valid" ;
    } catch (err:any) {
        throw new Error(err)

    }


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
        // console.log(user.username);
        return user.username;
    } catch (err: any) {
        return {message: err.message}
    }
}


