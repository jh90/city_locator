import React from 'react';

const States = props => {
    return <div className="display states-display">
        {
            props.results.map((result) => {
                return (<div className="result state-result" >{result}</div>);
            })
        }
    </div>;
}

export default States;