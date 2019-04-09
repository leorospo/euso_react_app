import React from "react";
import ProfileImg from "../elements/ProfileImg";
import ReactSwipe from 'react-swipe';
import propTypes from 'prop-types';
import ChatListRowMain from "./ChatListRowMain";
import ChatListRowSwipe from "./ChatListRowSwipe";
import "./ListRow.css";
import { Link } from 'react-router-dom'

export default class ChatListRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorited: this.props.chat.favorited,
            silenced: this.props.chat.silenced,
        };
    }

    render() {
        const { chat, onClick } = this.props;
        let reactSwipeEl;
        return (
            <Link to={`/chat/${chat.id}`}>
                <div
                    className={
                        "ChatListRow chat-list-element " +
                        (this.state.favorited ? `c-y1` : `c-w`)
                    }
                    onClick={onClick}
                    id={chat.id}
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
                        <div onClick={e => { e.stopPropagation(); e.preventDefault() }}>
                            <ChatListRowSwipe />
                        </div>
                    </ReactSwipe>
                    <div className="chat-list-sep" />
                </div>
            </Link>
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
