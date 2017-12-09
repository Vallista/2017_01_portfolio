import React from 'react';
import './Picture.css';
import { TransitionImage } from '../../index';

const Picture = ({title, picture, key, change}) => {
    return (
        <div className="picture">
            {/*<img src={picture} alt={"picture" + key}/>*/}
            <TransitionImage photoArray={picture} transitionHold={2000} change={change} title={title} />
        </div>
    );
};

export default Picture;