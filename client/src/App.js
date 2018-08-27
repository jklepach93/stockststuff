import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import YouTube from 'react-youtube';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserPortfolio from "./components/UserPortfolio";
import Registration from "./components/Registration";
import API from "./utils/API";
//import Fade from "react-fade-opacity"

class App extends Component {
  state = {
    username: "",
    email: "", 
    password: "",
    user: null
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }
    
  _onEnd(event) {
    event.target.playVideo();
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleLoginSubmit = event => {
    API.signup({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
    .then(data => {
      console.log("Signup Sucessful: ", data);
    })
  }

  componentDidMount(){
    API.getCurrentUser()
    .then(data => {
      console.log("Component Mounted: ",data);
      this.setState(({
        user: data.data
      }))
    })
  }
    
  render() {
    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };
    
  return (

    <Router>
      <div className="wrapper">

        <Navbar/>

        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/UserPortfolio" component={UserPortfolio}/>
          <Route exact path = "/Registration" render={ () =>{
            return <Registration handleInputChange={this.handleInputChange} 
                                 handleSubmit={this.handleLoginSubmit} />}}/>
        </Switch>

        <Footer/>

        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="HyYpY69Zk6Y"
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>
        
      </div>
    </Router>
  )
  }

};


export default App;
