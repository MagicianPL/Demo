import React from 'react';

import "./Bar.css";

const Bar = () => {
return (
    <div className="container-bar">
        <div className="b-top"></div>
        <div className="b-bottom">
            <ul>
                <li>Summary</li>
                <li>Activity</li>
            </ul>
        </div>
    </div>
)
};

export default Bar;