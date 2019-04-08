import React from "react";
import Icon from '../elements/Icon';
import Checkbox from '../elements/Checkbox';

export default class ChatListRowMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectChat: true,
            list: []
        }
    }

    updateContact() {
        this.setState({
            list: this.props.chat
        })
    }

    render() {
        const { chat, silenced } = this.props
        return (
            <div className="contact-list-element-content">

                <div className="contact-list-element-content-text">

                    <div className="contact-list-element-title">
                        <div className="contact-list-element-title-name sns-sp-620 tg6">{chat.userFullName}</div>
                    </div>

                    <div className="contact-list-element-content-mute">
                        <div className="contact-list-element-content-mute-icon">
                            {silenced &&
                                <Icon
                                    encumbrance="small"
                                    size="small"
                                    color="tg3"
                                    icon="notifications_off"
                                />
                            }
                        </div>
                    </div>

                    <div className="contact-list-element-subtitle-role sns-sp-416 tg3">{chat.userRole}</div>
                </div>

                <div className="chat-list-element-content-right">

                    {chat.unreadCount > 0 &&
                        <div className="contact-list-element-notification">
                            <div className="sns-pn-414">{chat.unreadCount > 99 ? "99+" : chat.unreadCount}</div>
                        </div>
                    }
                    <div className="contact-list-element-content-right-container">
                        {!this.state.selectChat || <Checkbox onChange={() => this.updateContact()} />}
                    </div>

                </div>

            </div>
        )
    }
}