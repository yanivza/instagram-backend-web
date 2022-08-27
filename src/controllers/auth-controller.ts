import { createToken, handleLogin, regUser } from "../services/auth-service";
import { Error } from "mongoose";

export async function login(req, res) {
    try {
        const user = req.body;
        if (user.username !== undefined && user.password !== undefined) {
            console.log(Boolean(user))
            const token = await handleLogin(user.username, user.password)
            if (token) {
                res.cookie("token", token);
                res.send(user.username + 'connected');
            }
        } throw { err: 'login failed' };
    } catch (err: any) {
        res.send(err.message)
        // res.status(401).send({ message: 'invalid username or password' });
    }

}

export async function register(req, res) {
    try {
        const newUser = await req.body;
        // console.log(newUser)
        res.send(await regUser(newUser) + " is created").end();

    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }

}

export function userInfo(req, res) {
    const user = req.body
    res.send(user);
}
