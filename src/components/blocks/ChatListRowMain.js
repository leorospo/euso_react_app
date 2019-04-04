import React from "react";

export default class ChatListRowMain extends React.Component {
  render() {
    let {chat, silenced} = this.props
    return (
      <div className="chat-list-element-content">
        <div className="chat-list-element-content-text">
          <div className="chat-list-element-title">
            <div className="chat-list-element-title-name sns-sp-620 tg6">
              {chat.userFullName}
            </div>
          </div>

          <div className="chat-list-element-content-mute">
            <div className="chat-list-element-content-mute-icon">
              {silenced && (
                <i className="material-icons icn-cnt-16 tg3">
                  notifications_off
                </i>
              )}
            </div>
          </div>

          <div className="chat-list-element-subtitle sns-sp-416 tg3">
            {chat.chatLastMessage.text}
          </div>
        </div>

        <div className="chat-list-element-content-right">
          {chat.unreadCount > 0 && (
            <div className="chat-list-element-notification">
              <div className="sns-pn-414">
                {chat.unreadCount > 99 ? "13" : chat.unreadCount}
              </div>
            </div>
          )}

          <div className="chat-list-element-time-container">
            <div className="sns-pn-410 tg5">{chat.chatLastMessage.time}</div>
          </div>
        </div>
      </div>
    );
  }
}
