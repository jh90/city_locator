import React from 'react';

const States = props => {
    return <ul id="display states-display">
        {
            props.results.map((result) => {
                return (<li className="result state-result" >{result}</li>);
            })
        }
    </ul>;
}

export default States;