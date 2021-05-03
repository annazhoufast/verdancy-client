import React, {Component} from 'react';
import {TitleCard} from './TitleCard';
import {Background} from './Background';
import {Steps} from './Steps';

export class Home extends React.Component {
    render() {
        return (
            <body>

              <TitleCard />
              <Background />
              <Steps />

            </body>
        )
    }
}
