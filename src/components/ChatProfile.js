import React, { Component } from 'react';

class ChatProfile extends Component {

    render() {
        const { fileName, dimensions, radius } = this.props
        return (
            <img src={fileName} className="ChatProfile"></img>
        );
    }
}

export default ChatProfile;
