import React, { Component } from 'react';
import { SplashPage, IntroPage, PortfolioPage } from '../index';
import './Home.css';
import { Nav } from '../../components';
import { BG1, BG2, BG3 } from '../../components';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            isPaging: false,
        };

        this.fadingDone = this.fadingDone.bind(this);
        window.scrollTo(0, 0);
    }

    paging() {
        this.setState({isPaging: true});
        const elm = this.refs.rect;
        elm.addEventListener('animationend', this.fadingDone);
    }

    fadingDone () {
        window.location = '#/projects';
    }

    componentWillUnmount () {
        const elm = this.refs.rect;
        elm.removeEventListener('animationend', this.fadingDone);
    }

    render() {
        return (
            <div>
                <Nav name="home" />
                <div className={this.state.isPaging ? "fadeOut" : "fadeIn"} ref='rect' style={{height: "300vh", width: "100%"}}>
                    <div className="bgimg-1" style={{backgroundImage: `url(${BG1})`, height: "100vh"}}>
                        <SplashPage/>
                    </div>
                    <div className="bgimg-2" style={{backgroundImage: `url(${BG2})`, height: "100vh"}}>
                        <IntroPage/>
                    </div>
                    <div className="bgimg-3" style={{backgroundImage: `url(${BG3})`, height: "100vh"}}>
                        <PortfolioPage paging={this.paging.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
};

Home.defaultProps = {

};

export default Home;