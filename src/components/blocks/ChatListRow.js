import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import propTypes from 'prop-types';
import "./ListRow.css";

export default class ChatListRow extends React.Component {
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
            <div className={"ChatListRow chat-list-element " + (this.state.favorited ? `c-y1` : `c-w`)}
                onClick={onClick}>

                <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                />

                <div className="chat-list-element-content">

                    <div className="chat-list-element-content-text">

                        <div className="chat-list-element-title">
                            <div className="chat-list-element-title-name sns-sp-620 tg6">{chat.userFullName}</div>
                        </div>

                        <div className="chat-list-element-content-mute">
                            <div className="chat-list-element-content-mute-icon">
                                {this.state.silenced && <i className="material-icons icn-cnt-16 tg3">notifications_off</i>}
                            </div>
                        </div>

                        <div className="chat-list-element-subtitle sns-sp-416 tg3">{chat.chatLastMessage.text}</div>
                    </div>

                    <div className="chat-list-element-content-right">

                        {chat.unreadCount > 0 &&
                            <div className="chat-list-element-notification">
                                <div className="sns-pn-414">{chat.unreadCount > 99 ? "99+" : chat.unreadCount}</div>
                            </div>
                        }

                        <div className="chat-list-element-time-container">
                            <div className="sns-pn-410 tg5">{chat.chatLastMessage.time}</div>
                        </div>

                    </div>

                </div>

                <div className="chat-list-sep"></div>

            </div>
        );
    }
}

ChatListRow.propTypes = {
    chat: propTypes.shape({
        userFullName: propTypes.string.isRequired,
        userProfileImg: propTypes.string.isRequired,
        chatLastMessage: propTypes.shape({
            text: propTypes.string,
            time: propTypes.string
        }).isRequired,
        unreadCount: propTypes.string.isRequired,
        silenced: propTypes.bool.isRequired,
        favorited: propTypes.bool.isRequired,
    }).isRequired,
    onClick: propTypes.func,

}
