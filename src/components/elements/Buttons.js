import React from 'react';
import propTypes from 'prop-types'
import './Buttons.css';

const SIZES = {
    medium: 'm',
    large: 'l',
}

const SHAPES = {
    square: "primary",
    round: "round",
}

export default class Buttons extends React.Component {

    render() {
        const { shape, size, optionalClass, type, onClick } = this.props
        return (
            <button
                className={`btn btn-${SHAPES[shape]}-${SIZES[size] || 'm'} ${optionalClass}`}
                type={type || 'button'}
                onClick={onClick}
            >{this.props.children}</button>
        )
    }
}

Buttons.propTypes = {
    shape: propTypes.oneOf(['square', 'round']),
    size: propTypes.oneOf(['small', 'medium', 'large']),
    optionalClass: propTypes.string,
    type: propTypes.string,
    children: propTypes.oneOfType([propTypes.element, propTypes.string]),
    onClick: propTypes.func.isRequired,
}