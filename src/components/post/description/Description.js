import React from 'react';
import './Description.css';

const Description = ({title, subtitle, description}) => {
    return (
        <div className="description">
            <div className="titleBox">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
                <p className="desc">{description}</p>
            </div>
        </div>
    );
};

export default Description;