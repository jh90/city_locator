import React from 'react';

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
            return `${city.alias} ${city.state_short}`;
        });
        let states = [];
        array.forEach((city) => {
            states = states.filter((state) => {
                return state == city.state_long ? false : true;
            });
            states.push(city.state_long);
        });
        return { cities, states, };
    }

    getResults (value) {
        fetch(`http://localhost:8008/srch/?input=${value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const { cities, states } = this.cleanResultData(data);
            this.setState({ cityResults: cities, stateResults: states, });
        });
    }

    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.cityResults.map((city) => {
                            return (<li>{city}</li>);
                        })
                    }
                </ul>
                <ul>
                    {
                        this.state.stateResults.map((state) => {
                            return (<li>{state}</li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}