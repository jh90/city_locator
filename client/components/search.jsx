import React from 'react';
import Autocomplete from 'react-autocomplete';

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            suggestions: [],
            dropdownOpen: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
    }

    cleanCityData (array) {
        return array.map((city) => {
            return city.name.slice(0, -1);
        });
    }

    getSuggestions (value) {
        fetch(`http://localhost:8008/dir/?input=${value}%`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const cities = this.cleanCityData(data);
            const gotResults = cities.length > 0;
            this.setState({ suggestions: cities, 
                            dropdownOpen: gotResults, });
        });
    }

    resetField () {
        this.setState( {
            input: '',
            suggestions: [],
            dropdownOpen: false,
        });
    }

    handleChange (value) {
        this.setState({ input: value, });
        value.length > 0 ? this.getSuggestions(value)
                         : this.resetField();
    }

    handleSubmit (value) {
        const search = (typeof value == 'string') ? value : `${this.state.input}%`;
        this.props.handleSubmit(search);
        this.resetField();
    }

    render () {
        const { input, suggestions, dropdownOpen } = this.state;
        const dropdownStyles = {
            boxShadow: 'none',
        };
        return (
            <div className="search-view" >
                <Autocomplete 
                    inputProps={{
                        className: 'search-field',
                        placeholder: 'Locate a city',
                        autoFocus: true,
                    }}
                    wrapperProps={{ className: 'search-wrapper', }}
                    open={dropdownOpen}
                    menuStyle={dropdownStyles}
                    items={suggestions}
                    getItemValue={item => item}
                    renderItem={(item, highlighted) =>
                        <div className="suggestion" 
                             style={{ background: highlighted ? 'lightgrey' : false,  
                                      color: highlighted ? 'blue' : false } } >
                          {item}
                        </div>
                    }
                    autoHighlight={false}
                    value={input}
                    onChange={(e) => this.handleChange(e.target.value)}
                    onSelect={(value) => this.handleSubmit(value)}
                />
                <button className="search-button" onClick={this.handleSubmit} >Search</button>
            </div>
        );
    }
}