import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            searchInput: null,
            showResults: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (val) {
        this.setState({ searchInput: val, });
    }

    toggleResultsMenu (val) {
        this.setState({ showResults: val, });
    }

    render () {
        const toggle = this.state.showResults;
        return (
            <div>
                <Search handleSubmit={this.handleSubmit} />
                {
                    toggle ? <Results search={this.state.searchInput} show={this.toggleResultsMenu} /> : false
                }
            </div>
        );
    }
}