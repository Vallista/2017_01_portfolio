import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            isBack: false,
            isCenterTitle: false,
        }
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

                {this.state.isCenterTitle && <div>
                    <div className="circle-group">
                        <div className="inner-group">
                            <div className="content">
                                <div className="circle"></div>
                            </div>
                            <div className="content">
                                <div className="circle"></div>
                            </div>
                            <div className="content">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Nav;