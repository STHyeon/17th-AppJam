import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    }
});

export default mongoose.model("question", QuestionSchema);
