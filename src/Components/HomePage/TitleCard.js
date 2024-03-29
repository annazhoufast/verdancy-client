import React, {Component} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Row, Container} from "react-bootstrap";

export class TitleCard extends React.Component {
    render() {
      return (
          <section id="title-card">
            <div className="container">
              <Row>
                <div>
                  <div id="main-title">
                    <h1>verdancy</h1>
                    <h2>[vər-​dᵊn(t)-​sē] <i>noun</i></h2>
                    <h2>1. <span className="green-text"><b>green</b></span> with vegetation</h2>
                  </div>
                  <br />
                  <div>
                    <p>
                      Go <span className="green-text"><b>green</b></span> with us. Reduce your
                      carbon footprint with home gardening!
                    </p>
                    <p id="mobile-message">
                      On mobile or a smaller screen? We highly recommend you use our web app on desktop, as otherwise some features
                      may not be available and some things may appear out of place.
                    </p>
                  </div>
                  <br />
                  <Button className="cream-button" size="lg">
                    <Link to="/search" className="link">Search our vegetables</Link>
                  </Button>
                </div>
                {/* image will go here */}
              </Row>
            </div>
          </section>
      )
    }
}
