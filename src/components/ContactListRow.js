import React from 'react';
import ProfileImg from './ProfileImg';
import propTypes from 'prop-types';
import "./listRow.css";

export default class ContactListRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: this.props.chat.favorited,
            silenced: this.props.chat.silenced,
        }
    }

    render() {
        const { chat, onClick } = this.props

        return (
            <div className={"ContactListRow contact-list-element " + (this.state.favorited ? `c-y1` : `c-w`)}
                onClick={onClick}>

                <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                />

                <div className="contact-list-element-content">

                    <div className="contact-list-element-content-text">

                        <div className="contact-list-element-title">
                            <div className="contact-list-element-title-name sns-sp-620 tg6">{chat.userFullName}</div>
                        </div>

                        <div class="contact-list-element-content-mute">
                            <div class="contact-list-element-content-mute-icon">
                                {this.state.silenced && <i class="material-icons icn-cnt-16 tg3">notifications_off</i>}
                            </div>
                        </div>

                        <div className="contact-list-element-subtitle-role sns-sp-416 tg3">{chat.userRole}</div>
                    </div>

                    <div className="contact-list-element-content-right">

                        {chat.unreadCount > 0 &&
                            <div className="contact-list-element-notification">
                                <div className="sns-pn-414">{chat.unreadCount > 99 ? "99+" : chat.unreadCount}</div>
                            </div>
                        }

                    </div>

                </div>

                <div class="contact-list-sep"></div>

            </div>
        );
    }
}

ContactListRow.propTypes = {
    chat: propTypes.shape({
        userFullName: propTypes.string.isRequired,
        userProfileImg: propTypes.string.isRequired,
        userRole: propTypes.string.isRequired,

        unreadCount: propTypes.string.isRequired,
        silenced: propTypes.bool.isRequired,
        favorited: propTypes.bool.isRequired,
    }).isRequired,
    onClick: propTypes.func,

}
