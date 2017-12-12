import React, { Component } from 'react';
import { DownIcon } from '../../components';
import './SplashPage.css';

class SplashPage extends Component {
    render() {
        return (
            <div style={{height: "100vh", width: "100%", position: "relative"}}>
                <div className="layer">
                    <div className="layer-inner">
                        <div className="content">
                            <span className="title">VALLISTA</span>
                            <div className="title-line"></div>
                            <p className="subtitle">Front-end / Back-end / Game Developer</p>
                            <img className="downIcon" src={DownIcon} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SplashPage;