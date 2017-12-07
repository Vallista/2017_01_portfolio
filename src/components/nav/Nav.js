import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            isBack: false,
            isCenterTitle: false,
            isChapter: 0,
            nowPathname: '',
            scrollTop: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate() {
        if (this.state.isChapter > 0 && !this.state.isCenterTitle) this.setState({isCenterTitle: true});
        else if (this.state.isChapter === 0 && this.state.isCenterTitle) this.setState({isCenterTitle: false});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        this.setState({isChapter: parseInt(scrollTop / window.innerHeight), scrollTop});
    }

    render() {
        const { isChapter, isCenterTitle, isBack } = this.state;
        const { name } = this.props;
        const circleArray = [];

        if (name === "home") {
            if(this.state.isBack === true) this.setState({isBack: false});
            for (let i = 0; i < 3; i++)
                circleArray.push(
                    <div className="content" key={i}>
                        <div className={"circle" + (isChapter === i ? "-full" : "") + (isCenterTitle ? " fadeIn" : " fadeOut")} key={i}/>
                    </div>
                );
        } else {
            if(this.state.isBack === false) this.setState({isBack: true});
        }

        return (
            <div className="nav">
                {!this.state.isBack && <div className="circle-group">
                    <div className="inner-group">
                        {circleArray}
                    </div>
                </div> }

                <div className="home-button">HOME</div>
                <div className="home-line"></div>

                {isBack && <div>
                    <div className="back-button" onClick={() => { this.props.change();}}>BACK</div>
                    <div className="back-line"></div>
                </div>}
            </div>
        );
    }
}

Nav.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Nav;