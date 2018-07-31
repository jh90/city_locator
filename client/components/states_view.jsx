import React from 'react';

const States = props => {
    const results = props.results;
    const headerText = `We found matches in ${results.length} states.`;
    return <div className="display states-display">
        { results.length > 1 ? 
            <div className="states-header" >{headerText}</div> 
            : false }
        { results.map((result) => {
                return (<div className="result state-result" >{result}</div>);
            }) }
    </div>;
}

export default States;