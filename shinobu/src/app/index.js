const { MessageModel } = require("../db");

const addMessage = async ({ from, to, message }) => {
  try {
    await MessageModel.create({ from, to, message });
    const messages = await MessageModel.find({});
    return messages;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getMessage = async () => {
  try {
    const messages = await MessageModel.find({});
    return messages;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { addMessage, getMessage };
