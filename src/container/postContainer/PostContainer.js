import React, { Component } from 'react';
import './PostContainer.css';
import { PostWrapper, PostList } from '../../components';
import { UserInfo } from '../../config';


class PostContainer extends Component {
    constructor() {
        super();

        this.state = {
            spec: UserInfo.spec,
        };
    }

    render() {

        return (
            <PostWrapper>
                <PostList infos={this.state.spec} change={this.props.change} />
            </PostWrapper>
        );
    }
}

export default PostContainer;