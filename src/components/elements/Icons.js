import React from 'react';
import propTypes from 'prop-types'
import './Icons.css';

const ENCUMBRANCE = {
    small: '24',
    large: '44',
}

const SIZES = {
    small: '16',
    large: '24',
}

export default class Icons extends React.Component {

    render() {
        const { encumbrance, size, color, onClick, icon } = this.props
        return (
            <div
                className={`icn-cnt-${ENCUMBRANCE[encumbrance]}`}
                onClick={onClick}>

                <i className={`material-icons icn-${SIZES[size]} ${color}`}>{icon}</i>
            
            </div>
        )
    }
}

Icons.propTypes = {
    encumbrance: propTypes.oneOf(['small', 'large']),
    size: propTypes.oneOf(['small', 'large']),
    color: propTypes.string,
    onClick: propTypes.func,

}