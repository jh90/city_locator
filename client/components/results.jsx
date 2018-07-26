import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: [],
            alternates: [],
        };
    }

    render () {
        return (
            <div>RESULTS</div>
        );
    }
}