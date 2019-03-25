import React, { Component } from 'react';
import ChatListRow from './components/ChatListRow';
import './style.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            silenced: false,
            isFavoriteFilterActive: false,
        }
    }

    render() {
        return (
            <div className="App">
                <ChatListRow
                user={{ fullName: 'Carol Evans', unreadCount: "0" }}
                lastMessage={{text: "Hey!", time: "10.30"}}
                onClick={() => alert('pippo')}/>
            </div>
        );
    }
}

export default App;
