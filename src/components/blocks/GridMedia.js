import React from 'react';
import propTypes from 'prop-types';


export default class GridMedia extends React.Component {

    render() {
        const { svg, name, index } = this.props
        return (
            <li>
                <img className="media-profile-element"
                    alt={name}
                    key={index}
                    src={`assets/img/profile/${svg}`}
                />
            </li>

        )
    }
}

GridMedia.propTypes = {
    svg: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
}