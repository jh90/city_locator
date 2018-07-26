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

    componentDidUpdate () {
        this.getResults();
    }

    getResults () {
        fetch(`http://localhost:8008/srch/?input=${this.props.search}`)
        .then((res) => {
            return res.json();
        })
        .then(async (data) => {
            const cityArray = data.map((city) => {
                return `${city.alias} ${city.state_short}`;
            });
            let stateArray = [];
            await data.forEach((city) => {
                stateArray = stateArray.filter((state) => {
                    return state == city.state_long ? false : true;
                });
                stateArray.push(city.state_long);
            });
            this.setState({ cityResults: cityArray, stateResults: stateArray, });
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