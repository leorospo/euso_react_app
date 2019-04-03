import React, { Component } from 'react';

/* import WksSelect from './components/pages/WksSelect';
import ContactList from './components/blocks/ContactList';
import ChatList from './components/blocks/ChatList';
import Grids from './components/blocks/Grids';
import ResetPassword from './components/pages/ResetPassword';
import Search from './components/blocks/Search';
import Buttons from './components/elements/Buttons';
import Login from "./components/pages/Login"; */
import ChatPage from './components/pages/ChatPage';
/* import Profile from './components/pages/Profile'; */


import './style.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            silenced: false,
            isFavoriteFilterActive: false,

            user: {
                userFullName: 'Carol Evans',
            },
        }
    }

    render() {

        return (
            /*   <WksSelect />  */
            /* <ContactList /> */
            /* <ChatList /> */
            /* <Login/>  */
            /* <ChatProfile /> */
            /* <Profile
            user={ {userName: 'Carol Evans', userRole: 'Risk Management' }}/>  */
            <ChatPage />
        );
    }
}

export default App;
