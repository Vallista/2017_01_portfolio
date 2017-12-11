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
                                    <p className="text"> click here. </p>
                                    <br/>
                                    <p className="text"> Essentially, the most successful offshore software </p>
                                    <p className="text"> development companies are </p>
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