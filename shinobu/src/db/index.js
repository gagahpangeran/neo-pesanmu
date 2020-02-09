const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  from: String,
  to: String,
  message: String
});

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = { MessageModel };
