import React, { Component } from 'react';
import './style.css';
import WksSelect from './components/pages/WksSelect';
import ContactList from './components/blocks/ContactList';
import ChatList from './components/blocks/ChatList';
// import Login from './components/pages/Login';
import Profile from './components/pages/Profile';


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
/*                       <WksSelect /> 
 */            /*             <ContactList /> */
            /*             <ChatList /> */
            /*                  <Login/>*/
             <Profile
            user={ {userName: 'Carol Evans', userRole: 'Risk Management' }}/> 

        );
    }
}

export default App;
