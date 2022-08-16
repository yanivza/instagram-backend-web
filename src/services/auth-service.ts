import {User} from "../models/user";

export function regUser(newUser) {
    const user = new User({
        username: newUser.username,
        fullName: newUser.fullName,
        mobile: newUser.mobile,
        email: newUser.email,
        regDate: new Date(),
        logDate: new Date(),
        // hashPassword: { type: String, required: true },
        Password: newUser.Password,
    });
    return
}