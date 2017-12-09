import React from 'react';
import { Post } from '../index';
import './PostList.css';
import { BW1, BW2, BW3,
    PD1, PD2, PD3, PD4,
    TB1, TB2, TB3, TB4,
    TL1, TL2, TL3,
    WT1, WT2, WT3,
    RR1,
    RS } from '../../components/images';

const PostList = ({ projects, change }) => {
    const pictureList = [
        [RR1],
        [RS],  // 태권도
        [PD1, PD2], // 판다리아 러닝
        [TL1, TL2],
        [TB1, TB2],
        [WT1, WT2],
        [PD1, PD2], // 판다리아 퍼즐
        [BW1, BW2],
    ];

    const postList = projects.map(
        (post, index) => (
            <Post title={post.title} subtitle={post.subtitle} description={post.description} picture={pictureList[index]} key={index} change={change} />
        ));

    return (
        <div className="postList">
            {postList}
        </div>
    )
};

export default PostList;