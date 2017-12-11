import React from 'react';
import './Detail.css';
import { Description, Picture, Title } from './index';

const Detail = ({title, pictures, description, part, status, feature}) => {
    return (
        <div className="detail">
            <div className="chapter1">
                <Title title={title}/>
                <Description description={description}
                             part={part}
                             status={status}
                             feature={feature}/>
            </div>
            <div className="chapter2">
                <Picture pictures={pictures} />
            </div>
        </div>
    );
};

export default Detail;