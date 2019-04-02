import React, { Component } from 'react';
import './style.css';
//import WksSelect from './components/pages/WksSelect';
//import ContactList from './components/blocks/ContactList';
//import ChatList from './components/blocks/ChatList';
import Chat from './components/blocks/Chat';
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



            <div className="cnt-global">



                <div className="cnt-section-left">

                    <div className="header content-sb">

                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons settings">settings</i>
                            </div>
                        </a>
                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons search">search</i>
                            </div>
                        </a>
                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons favorite">star_border</i>
                            </div>
                        </a>

                    </div>
                    <Chat />
                </div>
            </div>
        );
    }
}

export default App;
