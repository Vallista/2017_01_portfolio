import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="line-wrapper">
                <div className="card">
                    <div className="card-wrapper">
                        <div className="content">
                            {this.props.name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Card;