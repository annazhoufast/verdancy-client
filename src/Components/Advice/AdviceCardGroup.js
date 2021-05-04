import React, {Component} from 'react';
import {AdviceCard} from './AdviceCard.js';
import {Row, Container} from 'react-bootstrap';

export class AdviceCardGroup extends React.Component {
    render() {

        {/*
        // create the cards here
        let cards = [];
        for (let i = 0; i < 6; i++) {
            cards.push(<AdviceCard/>)
        }
        */}

        var advice = require("../../data/advice.json");
        let cards = [];
        for (let i = 0; i < advice.length; i++) {
            cards.push(
                <AdviceCard img={advice[i].Img}
                                alt={advice[i].Alt}
                                title={advice[i].Name} />
            );
        }

        return(
          <section className="centered" id="advice">
            <div className="container centered">
              <div className="centered">
                <Row id="advice-row" className="centered">
                  {cards}
                </Row>
              </div>
            </div>
          </section>
        )
    }
}
