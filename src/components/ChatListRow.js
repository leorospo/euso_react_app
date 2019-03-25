import React from 'react';
import ProfileImg from './ProfileImg';
import propTypes from 'prop-types'

export default class ChatListRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: false,
            silenced: false,
        }
    }

    render() {
        const { user, lastMessage, onClick } = this.props
        return (
            <div className= {"ChatListRow chat-list-element " + (this.state.favorited || `{c-y1}`)}
                onClick={onClick}>

                <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                    onClick={() => alert('pippo')}
                />

                <div className="chat-list-element-content"></div>

                <div className="chat-list-element-content-text">
                    <div className="chat-list-element-title sns-sp-620 tg6">{user.fullName}</div>
                    <div className="develop_leo_mute c0"></div>
                    <div className="chat-list-element-subtitle sns-sp-416 tg3">{lastMessage.text}</div>
                </div>

                <div className="chat-list-element-content-right">

                    {user.unreadCount > 0 &&
                        <div className="chat-list-element-notification">
                            <div className="sns-pn-414">{user.unreadCount}</div>
                        </div>
                    }

                    <div className="chat-list-element-time-container">
                        <div className="sns-pn-410 tg5">{lastMessage.time}</div>
                    </div>

                </div>

            </div>
        );
    }
}

ChatListRow.propTypes = {
    user: propTypes.shape({
        fullName: propTypes.string.isRequired,
        unreadCount: propTypes.string.isRequired,
    }).isRequired,
    lastMessage: propTypes.shape({
        text: propTypes.string,
        time: propTypes.string
    }).isRequired,
    onClick: propTypes.func,
}
