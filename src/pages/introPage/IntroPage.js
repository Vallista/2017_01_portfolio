import React, { Component } from 'react';
import { WrapperImg, BG2, FBIcon } from '../../components';
import './IntroPage.css';

class IntroPage extends Component {
    constructor() {
        super();

        this.state = {
            iconSrcs: [FBIcon, FBIcon, FBIcon],
            iconClasses: ["fbIcon", "fbIcon", "fbIcon"],
        };
    }

    render() {
        const icons = [];
        for(let i = 0; i < this.state.iconSrcs.length; i++)
            icons.push(<li><img src={this.state.iconSrcs[i]} className={this.state.iconClasses[i]}/></li>);



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
                            <ul className=""></ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroPage;