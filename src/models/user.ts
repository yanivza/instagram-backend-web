import mongoose from 'mongoose';


const ObjectId = mongoose.SchemaTypes.ObjectId;
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true},
    mobile:{type:String,required: true},
    email: {  type: String, required: true, match: /.+\@.+\..+/, unique: true },
    regDate: {type:Date},
    logDate: {type:Date},
    // hashPassword: { type: String, required: true },
    Password: { type: String },

});
const User = mongoose.model('User', UserSchema);
export{User};