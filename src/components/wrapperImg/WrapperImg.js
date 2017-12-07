import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WrapperImg extends Component {
    render() {
        const overlayStyle = {
            zIndex: this.props.zIndex + 1,
            position: this.props.fix,
            backgroundColor: "rgba(0,0,0," + this.props.opacity + ")",
            width: this.props.width,
            height: this.props.height,
        };

        const imageStyle = {
            zIndex: this.props.zIndex,
            position: this.props.fix,
            width: this.props.width,
            height: this.props.height,
        };
        
        return (
            <div>
                <div style={overlayStyle}> </div>
                <img src={this.props.img} style={imageStyle} alt="bg"/>
            </div>
        );
    }
}

WrapperImg.propTypes = {
    zIndex: PropTypes.number.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    fix: PropTypes.string,
    opacity: PropTypes.number,
};

WrapperImg.defaultProps = {
    fix: "absolute",
    opacity: 0.5,
};

export default WrapperImg;