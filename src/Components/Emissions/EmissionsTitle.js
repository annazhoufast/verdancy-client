import React, {Component, useState} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Row, Container} from "react-bootstrap";

export class EmissionsTitle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleDisplay: "hidden",
            toggleButton: "display-on"
        };
    }

    render() {
        return (
          <section className="green-background">
            <div className="container">
              <Row className="row">
                <div>
                    <h2>my emissions</h2>
                    <h1 id="emissions-num" className="page-content">{this.props.emissions}<span className="h2size-text"> g <span className="darkgreen-text">CO2e saved</span></span></h1>
                </div>
                <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/emissions/emissions.png?token=AKMRZNURTLNIKKYHSJ7A2XTAT374G"
                alt="woman holding up a globe" id="emissions-img" className="right-stuff"/>
              </Row>
              <div className="co2e-info">
                  <Button className={`cream-button ${ this.state.toggleButton}`} size="lg" onClick={this.showDisplay.bind(this)}>
                      <span>What does CO2e mean?</span>
                  </Button>
                  <div className={`${ this.state.toggleDisplay}`}>
                      <h3>What does CO2e mean?</h3>
                      <h3 className="darkgreen-text"><i>“Carbon dioxide equivalent”</i></h3>
                      <br />
                      <p>
                          Grams of carbon dioxide equivalent, or “g CO2e,” is the standard unit of measure when quantifying different greenhouse gases. For any amount and type of greenhouse gas,
                          CO2e signifies the amount of carbon dioxide which would have the equivalent impact on global warming.
                      </p>
                      <Button className="cream-button co2e-info" size="lg" onClick={this.hideDisplay.bind(this)}>
                          <span>OK, got it!</span>
                      </Button>
                  </div>
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
