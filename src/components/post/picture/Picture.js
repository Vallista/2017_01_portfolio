import React from 'react';
import './Picture.css';

const Picture = ({picture, key}) => {
    return (
        <div className="picture">
            <img src={picture} alt={"picture" + key}/>
        </div>
    );
};

export default Picture;