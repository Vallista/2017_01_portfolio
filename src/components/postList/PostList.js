import React from 'react';
import { Post } from '../index';
import './PostList.css';
import { BW1, BW2, BW3,
    PD1, PD2, PD3, PD4,
    TB1, TB2, TB3, TB4,
    TL1, TL2, TL3,
    WT1, WT2, WT3,
    RR1,
    RS1, RS2,
    CC1, CC2, CC3,
    TV1, TV2,
    PDD1, PDD2,} from '../../components/images';

const PostList = ({ projects, change }) => {
    const pictureList = [
        [RR1],
        [TV1, TV2],  // 태권도
        [PDD1, PDD2], // 판다리아 러닝
        [TL1, TL2],
        [TB1, TB2],
        [WT1, WT2],
        [PD1, PD2], // 판다리아 퍼즐
        [BW1, BW2],
        [RS1, RS2], // 리듬스타
        [CC1, CC2], // 크레이지 비트
    ];

    const postList = projects.map(
        (post, index) => (
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Post title={post.title} subtitle={post.subtitle} description={post.description} picture={pictureList[index]} key={index} change={change} />
            </div>
        ));

    return (
        <div className="postList">
            {postList}
        </div>
    )
};

export default PostList;