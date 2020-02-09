require("dotenv").config();

const { PORT, IS_DEV } = process.env;

module.exports = { PORT, IS_DEV };
