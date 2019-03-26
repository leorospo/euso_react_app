import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import propTypes from 'prop-types'

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
                    onClick={() => alert('pippo')}
                />

                <div className="chat-list-element-content">

                    <div className="chat-list-element-content-text">
                        <div className="chat-list-element-title sns-sp-620 tg6">{chat.userFullName}</div>
                        <div className="develop_leo_mute c0"></div>
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

                <div class="chat-list-sep"></div>

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
