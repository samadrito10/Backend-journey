const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    tittle:String,
    description:String,
});
const noteModel = mongoose.model("Note",noteSchema);

module.exports=noteModel;