const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unqiue: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, saltRounds);
  } catch (err) {
    next(err);
  }
});


module.exports = mongoose.model("User", UserSchema)
