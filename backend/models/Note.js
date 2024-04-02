const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "General",
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Note = mongoose.model("note", NotesSchema);
module.exports = Note;
