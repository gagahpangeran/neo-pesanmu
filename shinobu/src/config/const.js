require("dotenv").config();

const { PORT, IS_DEV, MONGODB } = process.env;

module.exports = { PORT, IS_DEV, MONGODB };
