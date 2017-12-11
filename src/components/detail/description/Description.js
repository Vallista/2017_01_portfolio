import React from 'react';
import './Description.css';

const Description = ({description, part, status, feature}) => {
    return (
        <div className="info">
            <div className="description">
                <span>Tech Stacks</span>
                <br/>
                {description}
            </div>
            <div className="blank"/>
            <div className="section">
                <span>Part</span>
                <br/>
                {part}
                <br/>
                <br/>
                <span>Status</span>
                <br/>
                {status}
                <br/>
                <br/>
                <span>Feature</span>
                <br/>
                {feature}
            </div>
        </div>
    )
};

export default Description;
