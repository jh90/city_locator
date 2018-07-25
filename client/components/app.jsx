import React from 'react';
import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            searchInput: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (value) {
        this.setState({ searchInput: value, });
    }

    render () {
        return (
            <div>
                <Search handleSubmit={this.handleSubmit} />
                <Results searchInput={this.state.searchInput} />
            </div>
        );
    }
}