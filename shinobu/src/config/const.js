require("dotenv").config();

const { PORT, IS_DEV, MONGODB, ALLOWED_HOST } = process.env;

module.exports = { PORT, IS_DEV, MONGODB, ALLOWED_HOST };
