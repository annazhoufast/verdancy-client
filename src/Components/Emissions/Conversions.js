import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Row, Container} from "react-bootstrap";
import {IndividualConversion} from "./IndividualConversion.js";

export class Conversions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleDisplay: "hidden",
            toggleButton: "display-on"
        };
    }

    render() {

      // using IndividualConversion component
      {/*
        const convRates = [0.0024813, 0.000869565217, 0.76794186];
        const emissions = this.props.emissions;
        let b = [];
        for (let i = 0; i < 3; i++) {
            // Math.round((numb + Number.EPSILON) * 100) / 100;
            let conv = Math.round(convRates[i] * emissions * 100) / 100;
            b.push(<IndividualConversion savings={conv} />);
        }
        */}

        const emissions = this.props.emissions;
        const mileRate = 0.0024813;
        const plasticRate = 0.000869565217;
        const waterRate = .76794186;
        let miles = Math.round(mileRate * emissions * 100) / 100;
        let plastic = Math.round(plasticRate * emissions * 100) / 100;
        let water = Math.round(waterRate * emissions * 100) / 100;

        return (
          <section>
            <div className="container">
              <Row>
                <div className="centered">
                  <h3 className="centered emissions-header">Let’s break this down! Saving {emissions} g CO2e is the same as saving...</h3>
                  <Row>
                      <div className="conversion centered">
                          <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/emissions/car.png?token=AKMRZNXOPVFGSU5YMOZHRMTAT3752"
                          alt="car icon" className="individ-step"/>
                          <p className="conversion-num">{miles} miles</p>
                          <p>driven by a car</p>
                      </div>
                      <div className="conversion centered">
                          <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/emissions/plastic.png?token=AKMRZNTSZFZMDKOCGZ5YJCTAT4AEA"
                          alt="plastic icon" className="individ-step"/>
                          <p className="conversion-num">{plastic} lbs</p>
                          <p>of plastic</p>
                      </div>
                      <div className="conversion centered">
                          <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/emissions/water.png?token=AKMRZNW6KS64XKJVDZQN4ELAT4AHM"
                          alt="water icon" className="individ-step"/>
                          <p className="conversion-num">{water} gal</p>
                          <p>of water</p>
                      </div>
                  </Row>
                </div>
              </Row>
              <Button className={`green-button calculated-info ${ this.state.toggleButton}`} size="lg" onClick={this.showDisplay.bind(this)}>
                  <span>How are these numbers calculated?</span>
              </Button>
              <div className={`centered ${ this.state.toggleDisplay}`}>
                  <h3 className="calculated-info">How are these numbers being calculated?</h3>
                  <br />
                  <p>
                      “Carbon dioxide equivalent” or “CO2e” is a term for describing different greenhouse gases in a common unit. For any quantity and type of greenhouse gas, CO2e signifies the amount
                      of CO2 which would have the equivalent global warming impact.
                  </p>
                  <Button className="green-button co2e-info" size="lg" onClick={this.hideDisplay.bind(this)}>
                      <span>OK, got it!</span>
                  </Button>
              </div>
            </div>
          </section>
        )
    }

    showDisplay= () => {
        this.setState({
          toggleDisplay: "display-on",
          toggleButton: "hidden"
        })
    }

    hideDisplay= () => {
        this.setState({
          toggleDisplay: "hidden",
          toggleButton: "display-on"
        })
    }

}
