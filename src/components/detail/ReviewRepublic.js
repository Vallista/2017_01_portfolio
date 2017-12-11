import React from 'react';
import './Detail.css';
import { Description, Picture, Title } from './index';

const ReviewRepublic = ({title, pictures, description}) => {
    return (
        <div className="detail">
            <div className="chapter1">
                <Title title={title}/>
                <Description description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"}
                             part={"Front-end / Back-end Programmer"}
                             status={"Working"}
                             feature={"SPA"}/>
            </div>
            <div className="chapter2">
                <Picture pictures={pictures} />
            </div>
        </div>
    );
};

export default ReviewRepublic;