import React from 'react';
import './Picture.css';

const Picture = ({pictures}) => {
    const pictureList = pictures.map((picture, index) => (
        <img className="image" src={picture} key={index} alt={index}/>
    ));

    return (
        <div className="pictures">
            {pictureList}
        </div>
    )
};

export default Picture;