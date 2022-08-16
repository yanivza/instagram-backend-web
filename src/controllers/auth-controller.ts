import {regUser} from "../services/auth-service";

export function login() {

}

export async function register(req, res) {
    try {
        const newUser = await req.body;
        // console.log(newUser)
        res.send(await regUser(newUser) + " is created").end();

    } catch (err: any) {
        res.status(400).send({message: err.message});
    }

}

export function userInfo() {
//make an assumptions that the user already identify
}
