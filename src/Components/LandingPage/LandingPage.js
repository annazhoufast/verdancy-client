import React, {Component} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import {Team} from './Team';

export class LandingPage extends React.Component {

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {
      return (
          <body id="landing-page">
              <section>
                  <h1>Verdancy helps you become more aware of your carbon footprint</h1>
                  <img className="img-100" src="https://raw.githubusercontent.com/annazhoufast/plantastic/main/data/imgs/Frame%2014.png?token=ALLXA2YMFL6ILMCWDAPETI3AUXPWI" alt="collage of wireframes from the verdancy website" />
                  <p>Gardening at home can offer huge benefits and make a positive impact on your carbon footprint. Verdancy is a place where gardeners and growers alike can keep track of their carbon emissions with the vegetables they choose to grow. </p>
              </section>

                <section>
                    {/* <Container> */}
                        <Row>
                            <Col lg={8}>
                                <h3>Choose what you grow</h3>
                                <p>Search through our database to learn more about the vegetables you can plant and harvest</p>
                            </Col>
                            <Col lg={4}>
                                {/* put the correct images later */}
                                <img className="img-100" src="https://raw.githubusercontent.com/annazhoufast/plantastic/main/data/imgs/Corn.png?token=ALLXA2ZREMKPKGWVRBISDK3AUXQNE" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                {/* put the correct images later */}
                                <img className="img-100" src="https://raw.githubusercontent.com/annazhoufast/plantastic/main/data/imgs/Corn.png?token=ALLXA2ZREMKPKGWVRBISDK3AUXQNE" />
                            </Col>
                            <Col lg={8}>
                                <h3>Maintain your vegetables online</h3>
                                <p>Manage all your vegetables in one place and log the vegetables you harvest</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8}>
                                <h3>Learn how you make an impact at home</h3>
                                <p>View the carbon emissions you saved and see how easy it is to reduce your carbon footprint</p>
                            </Col>
                            <Col lg={4}>
                                {/* put the correct images later */}
                                <img className="img-100" src="https://raw.githubusercontent.com/annazhoufast/plantastic/main/data/imgs/Corn.png?token=ALLXA2ZREMKPKGWVRBISDK3AUXQNE" />
                            </Col>
                        </Row>
                    {/* </Container> */}
                </section>

                <section>
                    <h3>We sought to answer</h3>
                    <h2>
                        How might inexperienced gardeners become motivated to grow their own vegetables at home so that they can reduce their carbon footprint?
                    </h2>
                </section>

                <section className="green-background">
                    <Container>
                        <h2>From our research, we discovered that</h2>
                        <Row>
                            <Col lg={4} >
                                <h3>1.</h3>
                                <p>
                                    About 8% of your personal carbon footprint comes from food. Emissions come from transporting, storage, and packaging.
                                </p>
                            </Col>
                            <Col lg={4} >
                                <h3>2.</h3>
                                <p>
                                    The biggest motivator to grow your own vegetables comes from the opportunity to be sustainable. 
                                </p>
                            </Col>
                            <Col lg={4} >
                                <h3>3.</h3>
                                <p>
                                    There is a gap in the market for a tool that ties gardening together with personal environmental impact.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container>
                        <img className="img-100" src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="aerial image of a grid of plants in pots" />
                        <h2>Verdancy is a place for amateur gardeners to flourish</h2>    
                        <p>
                            Noticing the gap between environmental impact and home gardening, we sought out to create a space for those to take home gardening to the next level, and get a personal understanding of what you grow and how it can leave a positive impact on the world. 
                            <br />
                            <br />
                            We wanted to widen the awareness for beginner gardeners and give them the resources and information that they need to be both successful and environmentally aware.
                        </p>
                    </Container>

                </section>

                <section className="cream-background">
                    <h2>Verdancy is designed to inform others</h2>
                    <h4>Come learn about our features</h4>
                    <p>add that image in</p>
                </section>
              <div>
                <h2>who we are</h2>
                <p>
                    We are students from the University of Washington Information School.
                    Verdancy is our cumulative Capstone project in our final year of undergraduate school. 
                </p>
                <Team />
              </div>
          </body>
      )
    }
}
