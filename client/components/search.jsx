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

    cleanCityData (array) {
        return array.map((city) => {
            return city.alias.slice(0, -1);
        });
    }

    getSuggestions (value) {
        fetch(`http://localhost:8008/dir/?input=${value}%`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const cities = this.cleanCityData(data);
            this.setState({ suggestions: cities, });
        });
    }

    handleChange (value) {
        this.setState({ input: value, });
        value.length > 2 ? this.getSuggestions(value) : false;
    }

    handleSubmit () {
        this.props.handleSubmit(`${this.state.input}%`);
        this.setState({ input: '', })
    }

    render () {
        return (
            <div className="view search-view" >
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
                <button id="search-button" onClick={this.handleSubmit} >Search</button>
            </div>
        );
    }
}