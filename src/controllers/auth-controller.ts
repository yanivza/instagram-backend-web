import {regUser} from "../services/auth-service";

export function login() {

}

export async function register(req, res) {
    const newUser = req.body;
    res.send(await regUser(newUser));

}

export function userInfo() {
//make an assumptions that the user already identify
}
