import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserInfo } from '../../../config';
import { Card } from '../card';
import './cardGroup.css';

class CardGroup extends Component {
    constructor() {
        super();

        this.state = {
            company: UserInfo.Company,
        }
    }

    render() {
        const d = this.state.company[1].name;

        const cardArray = [];
        this.state.company.forEach((elem, idx) => {
            const name = elem.name,
                start = elem.start,
                end = elem.end,
                description = elem.description;

            cardArray.push(<Card name={name} start={start} end={end} description={description} key={idx}/>);
        });

        return (
            <div className="card-group">
                { cardArray }
            </div>
        );
    }
}

CardGroup.propTypes = {
    count: PropTypes.number.isRequired,
};

CardGroup.defaultProps = {
    count: 0,
};

export default CardGroup;