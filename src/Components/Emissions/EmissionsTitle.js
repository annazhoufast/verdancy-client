import React, {Component, useState} from 'react';
import {Row, Container} from "react-bootstrap";

export class EmissionsTitle extends React.Component {

    render() {
        return (
          <section className="green-background">
            <div className="container">
              <Row className="row">
                <div className="left-stuff">
                    <div className="page-header">
                      <h2>my emissions</h2>
                    </div>
                    <h1 id="emissions-num" className="page-content">{this.props.emissions}<span className="medium-text"> g <span className="darkgreen-text">CO2e saved</span></span></h1>
                </div>
                <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/emissions/emissions.png?token=AKMRZNURTLNIKKYHSJ7A2XTAT374G"
                alt="woman holding up a globe" id="emissions-img"/>
              </Row>
            </div>
          </section>
        )
    }
}
