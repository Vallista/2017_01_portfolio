import React from 'react';
import { Post } from '../index';
import { BW1, PD1, TB1, TL1, WT1, RR1, RS, PD2 } from '../../components/images';
import './PostList.css';

const PostList = ({ infos }) => {
    const pictureList = [
        RR1,
        RS,  // 태권도
        PD1, // 판다리아 러닝
        TL1,
        TB1,
        WT1,
        PD1, // 판다리아 퍼즐
        BW1,
    ];

    const postList = infos.map(
        (post, index) => (
            <Post title={post.title} subtitle={post.subtitle} description={post.description} picture={pictureList[index]} key={index} />
        ));

    return (
        <div className="postList">
            {postList}
        </div>
    )
};

export default PostList;