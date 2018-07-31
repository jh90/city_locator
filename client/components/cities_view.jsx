import React from 'react';

const Cities = props => {
    return <div className="display cities-display">
        {
            props.results.map((result) => {
                return (<div className="result city-result" >{result}</div>);
            })
        }
    </div>;
}

export default Cities;