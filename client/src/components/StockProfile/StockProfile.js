import React, { Component } from 'react';
import "./StockProfile.css";

class StockProfile extends Component {
    render() {
        return (
            <div className="container" id="stockprofilecontainer">

                <div className="row">
                    <div className="col-s12 center">
                        <h3>Stock Profile</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="left" id="wikicard">
                        <h5> Wikipedia: Stock </h5>
                    </div>

                    <div className="right" id="snapshotcard">
                        <h5> Current day Snapshot</h5>
                    </div>
                </div>



                <div className="row">

                    <div className="col-s6 left" id="lowprice">
                        <h5> Lowest Price Ever </h5>
                    </div>

                    <div className="col-s6 right" id="highprice">
                        <h5> Highest Price Ever</h5>
                    </div>
                </div>

                <div className="row center" id="whatif">
                    <div className="col s1 center"></div>
                    <div className="col s10 center">
                        <p>What if I had <input type="number" id="number" name="number" /> stocks from <input type="date" id="date" name="date" /></p>
                        <div className="result"> </div>
                    </div>
                    <div className="col s1 center"></div>
                </div>

            </div>
        )
    }
}

export default StockProfile;