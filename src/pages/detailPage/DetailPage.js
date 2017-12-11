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
                <Nav name="detail" change={() => {this.onReturn("/projects")}}/>
                <div className={this.state.isChange === true ? "fadeOut" : "fadeIn"}>
                    {/*<h1 style={{color: "#ffffff"}}>{ match.params.page }</h1>*/}
                    <DetailContainer/>
                </div>
            </div>
        );
    }
};

export default DetailPage;