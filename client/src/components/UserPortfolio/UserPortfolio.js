import React, { Component } from 'react';
import "./UserPortfolio.css";
// import API from "../../utils/API";

class UserPortfolio extends Component {
  // state = {
  //   user: []
  // };

  // componentDidMount() {
  //   this.loaduser();
  // }

  // loaduser = () => {
  //   API.getuser()
  //     .then(res => this.setState({ user: res.data }))
  //     .catch(err => console.log(err));
  // };


    render() {
        return (
        <div className="container" id="portfolioContainer">
        {/* <button type ="login" data-target="modal1" class="waves-effect waves-light btn modal-trigger lighten-1" style="background-color: #83AF9B" id="login">LogIn</button>

        <div id="modal1" class="modal">
          <div class="modal-content">
          <form>
            <label>
            username:
           <input type="text" name="name" />
         </label>
 </form>
    <form>
       <label>
        password:
       <input type="password" name="name" />
      </label>
  </form>
       
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Done</a>
        </div>
      </div>
      </div> */}

       {/* $('.modal').modal(); */}
  
          <h1>Regretful_soul_85</h1>
          <i class="material-icons" id="delete">delete</i>
          <div className="buyDate"> Buy Date</div>
          <div className="currentDate"> Current Date</div>


         <div className="addingStock">
         <h5> + Add New Stock </h5>
         <form action="/action_page" id="userPortfolio" align="center">
            <div className="StockName">
            <input type="text" name="stock-name" placeholder="Stock Name" autoComplete="on" />
            </div>
            <div className="Shares">
            <input type="text" name="shares" placeholder="Shares" autoComplete="on" />
            </div>
            <div className="buyDate">
            <input type="date" name="date" placeholder="Buy Date" autoComplete="on" />
            </div>
        <input className="waves-effect waves-light btn blue darken-1 white-text white-accent pulse" type="submit" />
         </form>
         
         
         
          </div>
       </div>
        )
    }
}

export default UserPortfolio;