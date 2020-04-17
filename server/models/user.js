import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model("user", UserSchema);
