import React, { Component } from 'react';
import './DetailContainer.css';
import { DetailWrapper, ReviewRepublic } from '../../components';
import { PostInfo } from '../../config';
import { BW1, BW2,
    PD1,
    TB1,
    TL1,
    WT1,
    RR1, RR2, RR3, RR4,
    RS } from '../../components/images';

class DetailContainer extends Component {
    constructor() {
        super();

        this.state = {
            projects: PostInfo.projects,
            pictureList: [
                [RR2, RR3, RR4],
                [RS],  // 태권도
                [PD1], // 판다리아 러닝
                [TL1],
                [TB1],
                [WT1],
                [PD1], // 판다리아 퍼즐
                [BW1, BW2],
            ],
        };
    }

    render() {
        const { projects, pictureList } = this.state;

        return (
            <DetailWrapper>
                <ReviewRepublic title={projects[0].title} description={projects[0].description} pictures={pictureList[0]} />
            </DetailWrapper>
        );
    }
}

export default DetailContainer;