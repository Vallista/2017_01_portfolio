import React, { Component } from 'react';
import {Nav, WrapperImg, BG3, DownIcon} from '../../components';
import { PostContainer } from '../../container';
import './TreePage.css';

class TreePage extends Component {
    constructor() {
        super();

        this.state = {
            isChange: false,
        }
    }

    onReturn = (route) => {
        this.setState({isChange: true});

        setTimeout(() => {
            window.location = process.env.PUBLIC_URL + route;
        }, 500);
    };

    render() {
        return (
            <div>
                <Nav name="projects" change={() => {this.onReturn("/")}}/>
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