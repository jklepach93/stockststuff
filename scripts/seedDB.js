const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/stockMachine"
);
const userSeed = [
{
    username: "John Smith",
    email: "john.smith@gmail.com",
    password: "Bangladesh",
     date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insert(userSeed))
  .then(data => {
    console.log(data.result.n + " Username inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });