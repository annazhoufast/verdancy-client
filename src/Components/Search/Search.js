import React, {Component} from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {ResultGroup} from './ResultGroup';
import {SearchBar} from './SearchBar';

export class Search extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <ResultGroup plants={this.props.stuff} />
            </div>
        )
    }
}
