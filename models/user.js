const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : { type: String, 
    trim: true,
    required: true },
    password: {
      type: String,
      trim: true,
      required: true,
      validate: [
        function(input) {
          return input.length >= 6;
        },
        // Error Message
        "password should be longer."
      ]
    },
    
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

  login: { type: Date, 
          default: Date.now }
});

userSchema.pre("save", function(next) {
  this.hashPassword();

  if(this.email){
    this.displayName = this.email;
  }

  next();
});

userSchema.methods.hashPassword = function(){
  if(!this.password) return;
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model("Stock", userSchema);

module.exports = User;