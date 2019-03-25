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

                <ChatList
                    silenced={this.state.silenced}
                    isFavoriteFilterActive={this.state.isFavoriteFilterActive}
                />

            </div>
        );
    }
}

export default App;
