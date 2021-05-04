import React, {Component} from 'react';
import {AdviceCard} from './AdviceCard.js';
import {Row, Container} from 'react-bootstrap';

export class AdviceCardGroup extends React.Component {
    render() {

        var advice = require("../../data/advice.json");
        let cards = [];
        for (let i = 0; i < advice.length; i++) {
            cards.push(
                <AdviceCard front={advice[i].Front}
                                back={advice[i].Back}
                                frontAlt={advice[i].FrontAlt}
                                backAlt={advice[i].BackAlt} />
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
