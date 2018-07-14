import React from 'react';

import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            city_input: '',
        };
    }

    handleSubmit () {

    }

    render () {
        return (
            <div>
                <Search onSubmit={this.handleSubmit} />
                <Results />
            </div>
        );
    }
}