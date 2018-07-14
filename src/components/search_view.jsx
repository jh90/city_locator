import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

const SearchView = (props) => {
    return (
        <div>
            <ReactAutocomplete 
                items={[1,2,3]}
                getItemValue={item => item}
                renderItem={(item, highlighted) =>
                    <div style={{ background: highlighted ? 'lightgray' : 'white' }}>
                      {item}
                    </div>
                }
                value={props.input}
                onChange={(e) => props.change(e.target.value)}
                onSelect={(val) => props.submit(val)}
            />
            <button onClick={props.submit}>Search</button>
        </div>
    );
}

export default SearchView;