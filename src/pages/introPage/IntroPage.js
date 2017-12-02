import React, { Component } from 'react';
import { WrapperImg, BG2, FBIcon, GHIcon, TSIcon, CardGroup } from '../../components';
import { UserInfo } from '../../config';
import './IntroPage.css';

class IntroPage extends Component {
    constructor() {
        super();

        this.state = {
            iconSrcs: [FBIcon, GHIcon, TSIcon],
            iconClasses: ["fbIcon", "fbIcon", "fbIcon"],
            iconUrls: [UserInfo.link.github, UserInfo.link.facebook, UserInfo.link.tistory],
        };
    }

    render() {
        const icons = [];
        for(let i = 0; i < this.state.iconSrcs.length; i++)
            icons.push(<li key={i}><button onClick={() => { window.open(this.state.iconUrls[i]) }}><img src={this.state.iconSrcs[i]} className={this.state.iconClasses[i]} key={i}/></button></li>);

        return (
            <div style={{height: "100vh", width: "100%", position: "relative"}}>
                <WrapperImg img={BG2} zIndex={-2} width={"100vw"} height={"100vh"}/>
                <div className="layer">
                    <div className="layer-inner">
                        <div className="content">
                            <ul className="header">
                                <li><p className="title">VALLISTA</p></li>
                                {icons}
                            </ul>
                            <div className="line"></div>
                            <CardGroup count={6} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroPage;