"use strict";

const mongoose = require("mongoose");
// console.log(require('../configs/config.mongdb'))
const {db: {host, name, port}} = require('../configs/config.mongdb.js')

const connectString = `mongodb://${host}:${port}/${name}`;
// const connectString = `mongodb://localhost:27017/shopDEV`;
console.log(connectString)

class Database {
  constructor() {
    this.connect();
  }
  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 50
      })
      .then((_) => console.log("Connect mongoDB successfully"))
      .catch((_) => console.log("Error connect"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
