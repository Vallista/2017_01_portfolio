import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransitionImage extends Component {
    constructor(props) {
        super(props);

        const { photoArray } = this.props;

        this.state = {
            count: 0,
            fadeCount: 0,
            isPlay: false,
            interval: null,
            foreClassName: 'fadeOut',
            backClassName: 'fadeIn',
            foreImage: photoArray[1] || photoArray[photoArray.length - 1],
            backImage: photoArray[0],
            foreStyle: { zIndex: 200, },
            backStyle: { zIndex: 150, }
        }
    }

    mouseEnter = () => {
        const { transitionHold } = this.props;

        this.setState({
            isPlay: true,
            interval: setInterval(this.changeImage, transitionHold),
        });

        this.changeImage();

    };

    mouseOut = () => {
        const { photoArray } = this.props;

        clearInterval(this.state.interval);
        this.setState({
            count: 0,
            fadeCount: 0,
            isPlay: false,
            interval: null,
            foreClassName: 'fadeOut',
            backClassName: 'fadeIn',
            foreImage: photoArray[1] || photoArray[photoArray.length - 1],
            backImage: photoArray[0],
            foreStyle: { zIndex: 200, },
            backStyle: { zIndex: 150, }
        });
    };

    changeImage = () => {
        const { photoArray } = this.props;
        const { count, fadeCount } = this.state;
        const calc = count % 2 === 1;
        const fadeCalc = fadeCount % 2 === 1;

        this.setState({
            foreClassName: fadeCalc ? 'fadeOut' : 'fadeIn',
            backClassName: fadeCalc ? 'fadeIn' : 'fadeOut',
            foreImage: photoArray[calc ? count : (count + 1 >= photoArray.length ? 0 : count + 1)],
            backImage: photoArray[calc ? (count + 1 >= photoArray.length ? 0 : count + 1) : count],
            foreStyle: fadeCalc ? { zIndex: 150, } : { zIndex: 200, },
            backStyle: fadeCalc ? { zIndex: 200, } : { zIndex: 150, },
            count: count + 1,
            fadeCount: fadeCount + 1,
        });

        if (count > photoArray.length - 1) this.setState({count: 0});
    };

    render() {
        const { foreClassName, backClassName, foreImage, backImage } = this.state;

        return (
            <div onMouseEnter={this.mouseEnter} onMouseOut={this.mouseOut} className="TransitionImage" onClick={() => {this.props.change(this.props.title)}}>
                <img className={foreClassName} src={foreImage} alt="foreImage" />
                <img className={backClassName} src={backImage} alt="backImage" />
            </div>
        );
    }
}

TransitionImage.propTypes = {
    photoArray: PropTypes.array.isRequired,
    transitionHold: PropTypes.number.isRequired,
};

export default TransitionImage;