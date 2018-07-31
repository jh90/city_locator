import React from 'react';
import Cities from './cities_view.jsx';
import States from './states_view.jsx';
import { EALREADY } from 'constants';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityResults: [],
            stateResults: [],
        };
        this.getResults = this.getResults.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        const searchValue = nextProps.search;
        this.getResults(searchValue);
    }

    cleanResultData (array) {
        const cities = array.map((city) => {
            return `${city.name} ${city.state_short}`;
        })
        .sort((a, b) => {
            return a.length - b.length;
        });
        let states = [];
        array.forEach((city) => {
            states = states.filter((state) => {
                return state == city.state_long ? false : true;
            });
            states.push(city.state_long);
        })
        states.sort();
        return { cities, states, };
    }

    getResults (value) {
        fetch(`http://localhost:8008/srch/?input=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const { cities, states } = this.cleanResultData(data);
            this.setState({ cityResults: cities, stateResults: states, });
        });
    }

    render () {
        return (
            <div className="results-view" >
                <States results={this.state.stateResults } />
                <Cities results={this.state.cityResults } />
            </div>
        );
    }
}