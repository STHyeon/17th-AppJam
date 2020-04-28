import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    createdAt: { type: Date },
});

export default mongoose.model("question", QuestionSchema);
