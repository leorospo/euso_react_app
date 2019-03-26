import React, { Component } from 'react';
import ChatList from './components/ChatList';
import ContactList from './components/ContactList';
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
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ChatList
                        silenced={this.state.silenced}
                        isFavoriteFilterActive={this.state.isFavoriteFilterActive}
                    />
                    <ContactList
                        silenced={this.state.silenced}
                        isFavoriteFilterActive={this.state.isFavoriteFilterActive}
                    />

                </div>
            </div>
        );
    }
}

export default App;
