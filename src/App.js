import React, { Component } from 'react';
import './style.css';
//import WksSelect from './components/pages/WksSelect';
//import ContactList from './components/blocks/ContactList';
//import ChatList from './components/blocks/ChatList';
//import Chat from './components/blocks/Chat';
//import Login from './components/pages/Login'
import ChatPage from './components/pages/ChatPage'

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

            /*             <WksSelect />  */
            /*             <ContactList /> */
            /*             <ChatList /> */
            /* <Login
                company={{
                    companyName: "Groupama",
                    companyImg: "groupama.svg",
                }}
                wksEmail=""
            /> */
            <ChatPage />


        );
    }
}

export default App;
