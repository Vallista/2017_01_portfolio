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
                            <p className="title">{this.props.name}</p>
                            <p className="date">{this.props.start} ~ {this.props.end}</p>
                            <p className="description2">{ this.props.description }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;