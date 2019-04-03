import React from 'react';
import propTypes from 'prop-types'
import './Button.css';

const SIZES = {
    medium: 'm',
    large: 'l',
}

const SHAPES = {
    square: "primary",
    round: "round",
    outlined: "outlined",
}

export default class Button extends React.Component {

    render() {
        const { shape, size, optionalClass, type, id, onClick } = this.props
        return (
            <button
                className={`btn btn-${SHAPES[shape]}-${SIZES[size] || 'm'} ${optionalClass || ""}`}
                type={type || 'button'}
                id={id || ""}
                onClick={onClick}
            >{this.props.children}</button>
        )
    }
}

Button.propTypes = {
    shape: propTypes.oneOf(['square', 'round','outlined']),
    size: propTypes.oneOf(['small', 'medium', 'large']),
    optionalClass: propTypes.string,
    type: propTypes.string,
    id: propTypes.string,
    children: propTypes.oneOfType([propTypes.element, propTypes.string]),
    onClick: propTypes.func.isRequired,
}