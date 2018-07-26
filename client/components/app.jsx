import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            searchInput: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (val) {
        this.setState({ searchInput: val, });
    }

    render () {
        return (
            <div>
                <Search handleSubmit={this.handleSubmit} />
                <Results search={this.state.searchInput} />
            </div>
        );
    }
}