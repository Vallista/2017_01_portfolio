import React, { Component } from 'react';
import { Nav, WrapperImg, BG3 } from '../../components';
import { DetailContainer } from '../../container';
import './DetailPage.css';

class DetailPage extends Component {
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
        const { match } = this.props;

        return (
            <div>
                <Nav name="detail" change={(link) => {this.onReturn(link)}}/>
                <div className={this.state.isChange === true ? "fadeOut" : "fadeIn"}>
                    <DetailContainer match={match}/>
                </div>
            </div>
        );
    }
};

export default DetailPage;