import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
});

export default mongoose.model("user", UserSchema);
