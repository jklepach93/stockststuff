import axios from "axios";

export default {
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  signup: function(newUser){
    return axios.post("/api/user/signup", newUser);
  },

  login: function(user){
    return axios.post("/api/user/login", user);
  },

  getCurrentUser: function(){
    return axios.get("/api/user/currentUser");
  }
};
