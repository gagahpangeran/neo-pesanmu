const mongoose = require("mongoose");
const { MONGODB } = require("./const");

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

module.exports = db;
