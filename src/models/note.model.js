import mongoose, { mongo } from "mongoose";

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
})

const NoteModel = mongoose.model("notes", NoteSchema);
export default NoteModel;