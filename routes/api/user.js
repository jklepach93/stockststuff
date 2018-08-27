const router = require("express").Router();
const userController = require("../../controllers/userController");
const db=require("../../models");
const passport=require("../../passport/passport")
router
  .route("/:id")
  // .get(userController.findById)
  // .put(userController.update)

  router.get("/currentUser",function(req,res){
    if(req.user){
      res.json(req.user)
    }else{
      res.json (null)
    }
  })

  router.post("/signup", function(req, res) {
    console.log("BODY: ", req.body);
    db.User.create(req.body)
      .then((results) =>{
        res.json("/login");
      })
  });
  
  router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json({ user: req.user });
  });
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
module.exports = router;
