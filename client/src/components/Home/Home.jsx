import React, { Component } from "react";
import "./Home.css";
import StockProfile from "../StockProfile";
import { Autocomplete } from "react-materialize";
import companies from "./assets/companies.json";

class Home extends Component {
  state = {
    companies
  };
  render() {
    return (
      <div className="container" id="home-container">
        <div className="row">
          <div className="col-s12">
            <div className="header">
              <h3>Stock Market What-If Machine</h3>
              <h5>See what could be</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-s12">
              <form action="/action_page" id="search" align="center">
                <div className="searchInput">
                  <Autocomplete
                    name="company"
                    title="Company"
                    s={12}
                    data={this.state.companies}
                  />
                </div>
                <input
                  className="waves-effect waves-light btn blue darken-1 white-text white-accent pulse"
                  type="submit"
                />
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="popularResult">
                <h6 className="p" align="center">
                  Popular Stocks
                </h6>
                <div className="row">
                  <div className="col s6" align="center">
                    <div className="row">
                      <div className="col s12">AAPL|Apple</div>
                      <div className="col s12">FB|Facebook</div>
                      <div className="col s12">INTC|Intel</div>
                      <div className="col s12">TSLA|Tesla</div>
                    </div>
                  </div>
                  <div className="col s6" align="center">
                    <div className="row">
                      <div className="col s12">NVDA|NVidia</div>
                      <div className="col s12">FLEX|Flex</div>
                      <div className="col s12">CSCO|Cisco</div>
                      <div className="col s12">MFST|Microsoft</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StockProfile />
      </div>
    );
  }
}

export default Home;
