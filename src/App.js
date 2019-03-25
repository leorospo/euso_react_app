import React, { Component } from 'react';
import './App.css';
import ChatRow from './components/ChatListRow';
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
                <ChatRow/>
            </div>
        );
    }
}

export default App;
