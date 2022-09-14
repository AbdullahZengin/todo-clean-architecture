import { Schema } from 'mongoose';
export const UserSchema  = new Schema({
    id: { type: String, unique: true },
    username: String,
    password: String,
    roles: {type: Array, default: []}
})