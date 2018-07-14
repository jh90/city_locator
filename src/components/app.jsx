import React from 'react';

import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            searchInput: '',
        };
    }

    handleSubmit (input) {
        this.setState({ searchInput: input, });
    }

    render () {
        return (
            <div>
                <Search 
                    onSubmit={this.handleSubmit} />
                <Results 
                    query={this.state.searchInput} />
            </div>
        );
    }
}