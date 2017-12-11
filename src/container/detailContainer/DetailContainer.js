import React, { Component } from 'react';
import './DetailContainer.css';
import { DetailWrapper, Detail } from '../../components';
import { PostInfo } from '../../config';
import {
    BW1, BW2, BW3,
    PD1, PD2, PD3, PD4,
    TB1, TB2, TB3, TB4,
    TL1, TL2, TL3,
    WT1, WT2, WT3,
    RR2, RR3, RR4,
    RS1, RS2,
    CC1, CC2, CC3,
    TV1, TV2,
    PDD1, PDD2, RR1,
} from '../../components/images';

class DetailContainer extends Component {
    constructor() {
        super();

        this.state = {
            projects: PostInfo.projects,
            pictureList: [
                [RR2, RR3, RR4],
                [TV1, TV2],  // 태권도
                [PDD1, PDD2], // 판다리아 러닝
                [TL1, TL2, TL3],
                [TB1, TB2, TB3, TB4],
                [WT1, WT2, WT3],
                [PD1, PD2, PD3, PD4], // 판다리아 퍼즐
                [BW1, BW2, BW3],
                [RS1, RS2], // 리듬스타
                [CC1, CC2, CC3], // 크레이지 비트
            ],
        };
    }

    scene = () => {
        const { projects, pictureList } = this.state;

        switch(this.props.match.params.page) {
            case "Review Republic": return (<Detail title={projects[0].title} description={projects[0].description} pictures={pictureList[0]} part={projects[0].part} status={projects[0].status} feature={projects[0].feature} />);
            case "Taekwon VR": return (<Detail title={projects[1].title} description={projects[1].description} pictures={pictureList[1]} part={projects[1].part} status={projects[1].status} feature={projects[1].feature} />);
            case "Pandaria Dash": return (<Detail title={projects[2].title} description={projects[2].description} pictures={pictureList[2]} part={projects[2].part} status={projects[2].status} feature={projects[2].feature} />);
            case "Tile road": return (<Detail title={projects[3].title} description={projects[3].description} pictures={pictureList[3]} part={projects[3].part} status={projects[3].status} feature={projects[3].feature} />);
            case "TapBrick" : return (<Detail title={projects[4].title} description={projects[4].description} pictures={pictureList[4]} part={projects[4].part} status={projects[4].status} feature={projects[4].feature} />);
            case "4D Gunslinger" : return (<Detail title={projects[5].title} description={projects[5].description} pictures={pictureList[5]} part={projects[5].part} status={projects[5].status} feature={projects[5].feature} />);
            case "Pandaria Puzzle" : return (<Detail title={projects[6].title} description={projects[6].description} pictures={pictureList[6]} part={projects[6].part} status={projects[6].status} feature={projects[6].feature} />);
            case "4D BIGWAR" : return (<Detail title={projects[7].title} description={projects[7].description} pictures={pictureList[7]} part={projects[7].part} status={projects[7].status} feature={projects[7].feature} />);
            case "BMS Reader" : return (<Detail title={projects[8].title} description={projects[8].description} pictures={pictureList[8]} part={projects[8].part} status={projects[8].status} feature={projects[8].feature} />);
            case "Crazy Beat" : return (<Detail title={projects[9].title} description={projects[9].description} pictures={pictureList[9]} part={projects[9].part} status={projects[9].status} feature={projects[9].feature} />);
            default: {}
        }
    };

    render() {
        return (
            <DetailWrapper>
                {this.scene()}
            </DetailWrapper>
        );
    }
}

export default DetailContainer;