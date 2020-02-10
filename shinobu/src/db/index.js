const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    from: String,
    to: String,
    message: String
  },
  { timestamps: {} }
);

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = { MessageModel };
