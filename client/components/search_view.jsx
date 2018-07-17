import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

const SearchView = (props) => {
    return (
        <div>
            <ReactAutocomplete 
                items={props.suggestions}
                getItemValue={item => item}
                renderItem={(item, highlighted) =>
                    <div style={{ background: highlighted ? 'lightgray' : 'white' }}>
                      {item}
                    </div>
                }
                autoHighlight={false}
                value={props.input}
                onChange={(e) => props.handleChange(e.target.value)}
                onSelect={(val) => props.handleSubmit(val)}
            />
            <button onClick={props.handleSubmit}>Search</button>
        </div>
    );
}

export default SearchView;