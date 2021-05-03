import React, {Component} from 'react';
import {Row, Container} from "react-bootstrap";
import {Team} from './Team';

export class LandingPage extends React.Component {
    render() {
      return (
          <body>
              <section>
                  <div className="container">
                    <div>
                        <h2>who we are</h2>
                        <p>
                            Our product is aimed at helping beginner and amateur gardeners become more aware of the environmental impact
                            they have when home gardening. Our goal is to show how gardening and growing vegetables is for everyone!
                        </p>
                        <p>
                            Through a series of user testing and iterations of feedback, we have scaled our capstone project to constain features
                            that are meant to encourage beginner gardeners in learning more about how to take care and how much of an impact they
                            have with the vegetables they grow.
                        </p>
                        <p>
                            This web page aims to bridge the information gap that beginners experience in learning more about growing their own food.
                            They are able to gain personalized information regarding the amount of carbon emissions that they save when growing their vegetables,
                            and can track in real time their environmental impact.
                        </p>
                    </div>
                  </div>
              </section>
              <section className="green-background">
                  <div className="container">
                    <div>
                        <h2>who we are</h2>
                        <p>
                            Our product is aimed at helping beginner and amateur gardeners become more aware of the environmental impact
                            they have when home gardening. Our goal is to show how gardening and growing vegetables is for everyone!
                        </p>
                        <p>
                            Through a series of user testing and iterations of feedback, we have scaled our capstone project to constain features
                            that are meant to encourage beginner gardeners in learning more about how to take care and how much of an impact they
                            have with the vegetables they grow.
                        </p>
                    </div>
                  </div>
              </section>
              <div>
                <Team />
              </div>
          </body>
      )
    }
}
