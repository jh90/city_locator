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

    getSuggestions (input) {
        fetch(`localhost:8080/dist?${input}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data.body);
        });
    }

    handleChange (value) {
        this.setState({ input: value, });
        this.getSuggestions(value);
    }

    handleSubmit (value) {
        value = value || this.state.input;
        this.props.handleSubmit(value);
    }

    render () {
        return (
            <SearchView suggestions={this.state.suggestions}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} 
                        />
        );
    }
}