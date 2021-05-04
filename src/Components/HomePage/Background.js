import React, {Component} from 'react';
import {Row, Container} from "react-bootstrap";

export class Background extends React.Component {
    render() {
      return (
          <section>
            <div className="container">
              <Row>
                <div id="background-desc" className="left-stuff">
                  <h2>the background</h2>
                  <br />
                  <p>
                    <span className="background-num">8% </span>of personal carbon footprint comes from food. That's around
                    <span className="background-num"> 720 lbs </span> a year!
                  </p>
                  <p>
                    At Verdancy, we believe small changes lead to big impacts. The small act of growing your own vegetables
                    through home gardening can drastically reduce your carbon footprint. Let us show you how!
                  </p>
                </div>
                <img src="https://raw.githubusercontent.com/annazhoufast/verdancy-client/main/src/imgs/home/garden.png?token=AKMRZNSB6JWNVQUIDQA3GV3ATLFWA"
                alt="carbon footprint illustration" id="background-img"/>
              </Row>
            </div>
          </section>
      )
    }
}
