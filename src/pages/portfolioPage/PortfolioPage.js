import React, { Component } from 'react';
import { WrapperImg, BG3, } from '../../components';
import './PortfolioPage.css';

class PortfolioPage extends Component {

    render() {
        return (
            <div style={{height: "100vh", width: "100%", position: "relative"}}>
                <WrapperImg img={BG3} zIndex={0} width={"100%"} height={"100%"}/>
                <div className="layer">
                    <div className="layer-inner">
                        <div className="content">
                            <span className="portfolio">PORTFOLIO</span>
                            <div className="box" onClick={() => {
                                this.props.paging();
                            }}>
                                <div className="inner-field">
                                    <p className="text"> 여기를 클릭해주세요. </p>
                                    <br/>
                                    <p className="text"> 프로그래머로써 게임, 웹등 여러가지를 구현한 목록입니다. </p>
                                    <p className="text"> 상세한 설명도 들어가 있습니다. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;