import React, { Component } from 'react';
import {Nav, WrapperImg, BG3, DownIcon, BG1} from '../../components';
import { PostContainer } from '../../container';
import './TreePage.css';

class TreePage extends Component {
    constructor() {
        super();

        this.state = {
            isChange: false,
        };

        window.scrollTo(0, 0);
    }

    onReturn = (route) => {
        this.setState({isChange: true});

        setTimeout(() => {
            window.location = '#' + route;
        }, 500);
    };

    render() {
        return (
            <div>
                <Nav name="projects" change={(link) => {this.onReturn(link)}}/>
                <div className={this.state.isChange === true ? "fadeOut" : "fadeIn"}>
                    <div className="tree-wrapper">
                        <div className="tree"/>
                        <PostContainer change={(route) => {this.onReturn(route)}} />
                    </div>
                </div>

            </div>
        );
    }
};

export default TreePage;