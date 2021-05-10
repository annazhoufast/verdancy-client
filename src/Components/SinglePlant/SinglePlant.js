import React, {Component, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import {withRouter, useLocation} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'font-awesome/css/font-awesome.min.css';

export class SinglePlant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {},
            auth: localStorage.getItem("Authorization"),
            id: this.props.id
        };

    }

    componentDidMount() {
        const response = fetch("https://verdancy.capstone.ischool.uw.edu/v1/plants/" + this.state.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        console.log(response);
    }

    addToGarden = (e) => {
        e.preventDefault();
        console.log(this.props.id);
        const response = fetch("https://verdancy.capstone.ischool.uw.edu/v1/AddPlants/" + this.state.id, {
            method: "POST",
            headers: new Headers({
                "Authorization": this.state.auth
            })
        });
        if (response.status > 201) {
            const error = response.text();
            console.log(error);
            return;
        }
        this.setState({inGarden: true});
        console.log(response);
    }

    render() {


        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <section>
                  <div className="container">
                      <Container>
                          <Row>
                              <Col>
                                  <h2>{items.PlantName}</h2>
                              </Col>
                              <Col className="add-more">
                                  {this.state.auth ?
                                      <Button variant="primary" size="lg" className="add-button green-button" onClick={this.addToGarden}>+ add to garden</Button>
                                          :
                                      <div />
                                  }

                              </Col>
                          </Row>
                          <Row>
                              <p className="darkgreen-text"><b>{items.CO2PerUnit} g CO2e</b> saved per tomato | <b>Gardening Difficulty:</b> {items.Difficulty} | <b>Zones:</b> {items.ZoneStart} - {items.ZoneEnd} | <b>Height:</b> {items.Height}</p>
                          </Row>
                      </Container>

                      <Container id="plant-info">
                          <Row>
                              <Col lg={7}>
                                  <p className="font-size-14">{items.Descr}</p>
                                  {/* <p>Height: {items.Height}</p> */}
                                  <h3>Vegetable Care</h3>
                                  <hr className="line"></hr>
                                  <Container >
                                      <Row>
                                          <p className="font-size-14"><b>Watering:</b> {items.Watering} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Sunlight:</b> {items.Sun} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Soil:</b> {items.Soil} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Timing:</b> {items.WhenToPlant} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Feeding:</b> {items.Feeding} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Transplanting:</b> {items.Transplanting} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Spacing:</b> {items.Spacing} </p>
                                      </Row>
                                      <Row>
                                          <p className="font-size-14"><b>Harvesting:</b> {items.Harvesting} </p>
                                      </Row>
                                  </Container>
                              </Col>
                              <Col lg={5}>
                                  <img src={items.ImageLink2} alt="pic of plant" id="plant-img" />

                              </Col>
                          </Row>
                      </Container>
                  </div>
                </section>
            )
        }
    }
}

const ShowTheLocationWithRouter = withRouter(SinglePlant);
