import React from 'react';
import { Node, Description, Picture } from './index';
import './Post.css';

const Post = ({title, subtitle, description, picture, key, change}) => {
    const style = {
        height: (key * 400) + "px",
    };

    return (
        <div className="post" style={style} key={key}>
            <Description title={title} subtitle={subtitle} description={description} />
            <Node />
            <Picture title={title} picture={picture} key={key} change={change} />
        </div>
    )
};

export default Post;