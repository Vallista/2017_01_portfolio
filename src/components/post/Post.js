import React from 'react';
import { Node, Description, Picture } from './index';
import './Post.css';

const Post = ({title, subtitle, description, picture, key}) => {
    const style = {
        height: (key * 400) + "px",
    };

    return (
        <div className="post" style={style}>
            <Description title={title} subtitle={subtitle} description={description} />
            <Node />
            <Picture picture={picture} key={key} />
        </div>
    )
};

export default Post;