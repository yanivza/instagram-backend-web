import mongoose from'mongoose';
import {User} from "./user";
// import {Post} from "./post";


async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://userDB:userdb1234@cluster0.02lkr1k.mongodb.net/instagramDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to db');
    } catch (err) {
        console.log('could not connect');
        console.log(err);
        // throw new Error('Could not connect');
        return Promise.reject(new Error('Could not connect'));

    }


}


export  {connectToDb}