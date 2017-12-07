import React from 'react';
import './PostWrapper.css';

const PostWrapper = ({children}) => (
    <div className="post-wrapper">
        {children}
    </div>
);

export default PostWrapper;