import React from 'react';
import propTypes from 'prop-types'
import './Icon.css';

const ENCUMBRANCE = {
    small: '16',
    medium: '24',
    large: '44',
}

const SIZES = {
    small: '16',
    large: '24',
}

export default class Icon extends React.Component {

    render() {
        const { encumbrance, size, optionalClass, color, onClick, icon } = this.props
        return (
            <div
                className={`icn-cnt-${ENCUMBRANCE[encumbrance]} ${optionalClass || ""}`}
                onClick={onClick}>

                <i className={`material-icons icn-${SIZES[size]} ${color}`}>{icon}</i>
            
            </div>
        )
    }
}

Icon.propTypes = {
    encumbrance: propTypes.oneOf(['small', 'medium', 'large']),
    size: propTypes.oneOf(['small', 'large']),
    color: propTypes.string,
    onClick: propTypes.func,

}