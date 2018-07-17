import { Component } from 'react';
import Search from './search.jsx';
import Results from './results.jsx';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            searchInput: '',
        };
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