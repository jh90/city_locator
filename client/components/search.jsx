import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            suggestions: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
    }

    getSuggestions (value) {
        fetch(`http://localhost:8008/dir/?srchin=${value}`)
        .then((res) => {
            return res.json();
        })
        .then((cities) => {
            const cleanData = cities.map((city) => {
                return city.alias.slice(0, -1);
            });
            this.setState({ suggestions: cleanData, });
        });
    }

    handleChange (value) {
        this.setState({ input: value, });
        value.length > 2 ? this.getSuggestions(value) : false;
    }

    handleSubmit () {
        this.props.handleSubmit(this.state.input);
        this.setState({ input: '', });
    }

    render () {
        return (
            <div>
                <ReactAutocomplete 
                    items={this.state.suggestions}
                    getItemValue={item => item}
                    renderItem={(item, highlighted) =>
                        <div style={{ background: highlighted ? 'lightgray' : 'white' }}>
                          {item}
                        </div>
                    }
                    autoHighlight={false}
                    value={this.state.input}
                    onChange={(e) => this.handleChange(e.target.value)}
                    onSelect={(val) => {
                         this.props.handleSubmit(val);
                         this.setState({ input: '', });
                    }}
                />
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        );
    }
}