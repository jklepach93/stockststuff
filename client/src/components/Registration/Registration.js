import React from 'react';
// import { Jumbotron, Button } from 'reactstrap';
import './Registration.css';


const Registration = ({handleInputChange, handleSubmit}) => {
  return (
    <div className="container center">
      <div className="center" id="reg">
        <h1>Account Login</h1>
        <form>
          <label id="username">
            username:
            <input type="text" name="username" onChange={handleInputChange}/>
          </label>
        </form>

        <form>
          <label id="email">
           Email:
            <input type="email" name="email" onChange={handleInputChange}/>
          </label>
        </form>

        <form>
          <label id="password">
            password:
            <input type="password" name="password" onChange={handleInputChange}/>
          </label>
        </form>
        <div>
        <input className="waves-effect waves-light btn blue darken-1 white-text white-accent pulse" type="button" onClick={handleSubmit} value="Log In"/>
       </div>
    

      </div>
    </div>
  );
};


export default Registration;