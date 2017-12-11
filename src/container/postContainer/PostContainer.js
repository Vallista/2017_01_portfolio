import React, { Component } from 'react';
import './PostContainer.css';
import { PostWrapper, PostList } from '../../components';
import { UserInfo } from '../../config';

class PostContainer extends Component {
    constructor() {
        super();

        this.state = {
            projects: UserInfo.projects,
        };
    }

    render() {
        return (
            <PostWrapper>
                <PostList projects={this.state.projects} change={this.props.change} />
            </PostWrapper>
        );
    }
}

export default PostContainer;