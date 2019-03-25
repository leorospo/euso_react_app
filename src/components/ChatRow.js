import React, { Component } from 'react';
import ChatProfileImg from './ProfileImg';

class ChatRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: false,
            silenced: false,
            unreadMessages: false
        }
    }

    onclick() {

    }

    render() {
        return (
            <div className="ChatRow" onClick={() => onclick()}>
                <ChatProfileImg />

            </div>
        );
    }
}

export default ChatRow;
