import React from 'react';

const Cities = props => {
    return <ul id="display cities-display">
        {
            props.results.map((result) => {
                return (<li className="result city-result" >{result}</li>);
            })
        }
    </ul>;
}

export default Cities;