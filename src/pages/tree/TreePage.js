import React, { Component } from 'react';
import { Nav, WrapperImg, BG3 } from '../../components';
import { PostContainer } from '../../container';
import './TreePage.css';

class TreePage extends Component {
    constructor() {
        super();

        this.state = {
            isChange: false,
        }
    }

    onReturn = () => {
        this.setState({isChange: true});

        setTimeout(() => {
            window.location = process.env.PUBLIC_URL + "/";
        }, 500);
    };

    render() {
        return (
            <div style={{width: "100%"}} className={this.state.isChange === true ? "fadeOut" : "fadeIn"}>
                <WrapperImg img={BG3} zIndex={-1} width={"100%"} height={"100%"} fix={"fixed"} opacity={0.8}/>
                <Nav name="tree" change={this.onReturn}/>
                <div className="tree-wrapper">
                    <div className="tree">
                    </div>
                    <PostContainer />
                </div>
            </div>
        );
    }
};

export default TreePage;