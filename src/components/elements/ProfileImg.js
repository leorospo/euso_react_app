import React from 'react';
import propTypes from 'prop-types'
import defaultImg from '../../assets/vector/Prova.png'
import './ProfileImg.css';

const SIZES = {
    small: '40',
    medium: '44',
    large: '52',
    xl: '170',
}

export default class ProfileImg extends React.Component {

    render() {
        const { user, size, onClick } = this.props
        const filePath = user.profileImgName ? `assets/img/profile/${user.profileImgName}` : defaultImg

        return (
            <img
                alt={`${user.name} profile`}
                src={filePath}
                className={`img-profile-${SIZES[size] || '44'}`}
                onClick={onClick}></img>
        );
    }
}

ProfileImg.propTypes = {
    user: propTypes.shape({
        name: propTypes.string.isRequired,
        profileImgName: propTypes.string.isRequired,
    }).isRequired,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    onClick: propTypes.func,
}
