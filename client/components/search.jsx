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
        this.getSuggestions = this.getSuggestions.bind(this);
    }

    getSuggestions (input) {
        fetch(`http://localhost:8008/dir/?input=${input}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const cleanData = data.map((match) => {
                const cleanSuggestion = `${match.alias} ${match.state_short}`;
                return cleanSuggestion;
            });
            this.setState({ suggestions: cleanData, });
        });
    }

    handleChange (value) {
        this.setState({ input: value, });
        value.length > 2 ? this.getSuggestions(value) : false;
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