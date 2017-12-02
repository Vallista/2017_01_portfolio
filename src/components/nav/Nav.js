import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            isBack: false,
            isCenterTitle: false,
            isChapter: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate() {
        if(this.state.isChapter > 0 && !this.state.isCenterTitle) this.setState({isCenterTitle: true});
        else if(this.state.isChapter === 0 && this.state.isCenterTitle) this.setState({isCenterTitle: false});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        this.setState({isChapter: parseInt(scrollTop / window.innerHeight)});
    }

    render() {
        return (
            <div className="nav">
                <div className="home-button">HOME</div>
                <div className="home-line"></div>

                {this.state.isBack && <div>
                    <div className="back-button"> BACK </div>
                    <div className="back-line"></div>
                </div>}

                <div className="circle-group">
                    <div className="inner-group">
                        <div className="content">
                            <div className={this.state.isCenterTitle ? "circle fadeIn" : "circle fadeOut"}></div>
                        </div>
                        <div className="content">
                            <div className={this.state.isCenterTitle ? "circle fadeIn" : "circle fadeOut"}></div>
                        </div>
                        <div className="content">
                            <div className={this.state.isCenterTitle ? "circle fadeIn" : "circle fadeOut"}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;