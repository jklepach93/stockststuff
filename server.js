const mongoose = require("mongoose");
const express = require ("express");
const bodyParser = require ("body-parser");
const routes = require("./routes");
// My passport object configure with local (and potentially ) google strategy.
const passport = require("./passport/passport");
// Express Session 
const session = require("express-session"); 
// Used to store our session info insid of MongoDB
const MongoStore = require('connect-mongo')(session);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/StockMachine");

 //Setuup express to use sessions and also to save session information inside of Mongo
app.use(session({ 
  secret: "I 4m 4bs0lut3ly aw3s0m3!", 
  resave: true, 
  saveUninitialized: true,
  store: new MongoStore({ 
    mongooseConnection: mongoose.connection,
    ttl: 8 * 60 * 60 // 8 Hours
  }) 
}));

// Initialize the passport middleware and session.
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});