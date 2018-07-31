import React from 'react';

const Cities = props => {
    const results = props.results;
    return <div className="display cities-display">
        { results.length > 1 ? 
            <div className="cities-header" >See your city?</div> 
            : false }
        { results.map((result) => {
                return (<div className="result city-result" >{result}</div>);
            }) }
    </div>;
}

export default Cities;