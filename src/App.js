import React, { Component } from 'react';
import './style.css';
 import WksSelect from './components/pages/WksSelect';
import ContactList from './components/blocks/ContactList';
import ChatList from './components/blocks/ChatList'; 
import Login from "./components/pages/Login"


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
             <Login
                company={{
                    companyName: "Groupama",
                    companyImg: "groupama.svg",
                }}
                wksEmail=""
            /> 
            /*             <WksSelect />  */
            /*             <ContactList /> */
            /*             <ChatList /> */
        )
    }
}

export default App;
