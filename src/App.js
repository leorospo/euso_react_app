import React, { Component } from 'react';
import './style.css';
import WksSelect from './components/pages/WksSelect';
import ContactList from './components/blocks/ContactList';
import ChatList from './components/blocks/ChatList';
import Grids from './components/blocks/Grids';
import ResetPassword from './components/pages/ResetPassword';
import Search from './components/blocks/Search';


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
               /*<ContactList /> */
            /*             <ChatList /> */
            /*<Grids />*/
            /*< ResetPassword  />*/
           <Search/>
      

         ) }
}

export default App;
