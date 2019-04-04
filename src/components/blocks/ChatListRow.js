import React from "react";
import ProfileImg from "../elements/ProfileImg";
import ReactSwipe from "react-swipe";
import Icon from '../elements/Icon';
import propTypes from 'prop-types';
import "./ListRow.css";
import ChatListRowMain from "./ChatListRowMain";
import ChatListRowSwipe from "./ChatListRowSwipe";
import "./ChatListRowSwipe.css";

export default class ChatListRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: this.props.chat.favorited,
      silenced: this.props.chat.silenced
    };
  }

  render() {
    const { chat, onClick } = this.props;
    let reactSwipeEl;
    return (
      <div
        className={
          "ChatListRow chat-list-element " +
          (this.state.favorited ? `c-y1` : `c-w`)
        }
        onClick={onClick}
      >
        <ProfileImg
          user={{ name: "Carol Evans", profileImgName: "1_carol.jpg" }}
          size="medium"
        />
        <ReactSwipe
          className="swipe"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <div>
            <ChatListRowMain chat={chat} silenced={this.state.silenced} />
          </div>
          <div>
            <ChatListRowSwipe />
          </div>
        </ReactSwipe>
        <div className="chat-list-sep" />
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
    favorited: propTypes.bool.isRequired
  }).isRequired,
  onClick: propTypes.func
};
