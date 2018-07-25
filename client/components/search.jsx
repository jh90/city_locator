import React from 'react';
import SearchView from './search_view.jsx';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            suggestions: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getSuggestions (input) {
        fetch(`http://localhost:8008/dir/?input=${input}`)
        .then(res => {
            console.log('return');
            return res.json();
        })
        .then(data => {
            console.log('show');
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
            <SearchView input={this.state.input}
                        suggestions={this.state.suggestions}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} 
                        />
        );
    }
}