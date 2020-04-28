import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
    title: { type: String, required: true },
    start: { type: String },
    end: { type: String },
    desc: { type: String, required: true },
});

export default mongoose.model("calendar", CalendarSchema);
