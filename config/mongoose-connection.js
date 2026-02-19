const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/punarnava`)
  .then(function () {
    dbgr("connected to database");
  })
  .catch(function (err) {
    dbgr("error connecting to database", err);
  });

module.exports = mongoose.connection;
