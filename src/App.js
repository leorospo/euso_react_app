import React, { Component } from 'react';
import './style.css';
import WksSelect from './components/pages/WksSelect';
import ContactList from './components/blocks/ContactList';
import ChatList from './components/blocks/ChatList';


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
            /*             <WksSelect /> */
            /*             <ContactList /> */
            /*             <ChatList /> */
        );
    }
}

export default App;
