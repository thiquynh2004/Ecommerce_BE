"use strict";

const { Schema } = require("mongoose");
const mongoose = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inActive",
      enum: ["active", "inActive"],
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);
