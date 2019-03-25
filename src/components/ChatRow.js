import React, { Component } from 'react';
import ChatProfile from './ChatProfile';

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
                <ChatProfile />
                
            </div>
        );
    }
}

export default ChatRow;
