import React from 'react';

import SearchView from './search_view.jsx';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            suggestions: [],
        };
    }

    handleChange (value) {

    }

    handleSubmit (value) {
        value = value || this.state.input;
        this.props.handleSubmit(value);
    }

    render () {
        return (
            <SearchView submit={this.handleSubmit}
                        change={this.handleChange}
                        input={this.state.input}
                        suggestions={this.state.suggestions} 
                        />
        );
    }
}