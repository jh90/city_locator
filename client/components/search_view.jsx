import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

export default class SearchView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <ReactAutocomplete 
                    items={this.props.suggestions}
                    getItemValue={item => item}
                    renderItem={(item, highlighted) =>
                        <div style={{ background: highlighted ? 'lightgray' : 'white' }}>
                          {item}
                        </div>
                    }
                    autoHighlight={false}
                    value={this.props.input}
                    onChange={(e) => this.props.handleChange(e.target.value)}
                    onSelect={(val) => this.props.handleSubmit(val)}
                />
                <button onClick={this.props.handleSubmit}>Search</button>
            </div>
        );
    }
}