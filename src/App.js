import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import WksSelect from './components/pages/WksSelect';
import ChatList from './components/blocks/ChatList';
import Login from './components/pages/Login';
import ChatPage from './components/pages/ChatPage';
import ContactList from './components/blocks/ContactList';
import ChatListPage from './components/pages/ChatListPage';
import Chat from './components/blocks/Chat';

import './style.css';


// Da inserire nello switch del ROUTER
//import Profile from './components/pages/Profile';
//import ResetPassword from './components/pages/ResetPassword';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            silenced: false,
            isFavoriteFilterActive: false,
            workspace: { // undefined QUANDO SI IMPLEMENTER° LA FUNZIONALITA WKS SELECT
                id: 'x9vqKsWGxFfCbl7J',
                companyName: 'born2code',
                companyImg: 'groupama.svg',
            },
            userId: undefined,
            openChatId: undefined,
        }
    }
    
        setChatId(id) {
        this.setState({
            chatId: id
        })
    }

    setWorkspace = (wksObj) => {
        this.setState({
            workspace: wksObj,
        });
    }

    setUserId = (id) => {
        this.setState({
            userId: id
        },)
    }

    render() {
        return (

           <Switch>
                <Route path='/' exact render={() =>
                    <ChatListPage
                        workspace={this.state.workspace}
                        userId={this.state.userId}
                    />
                } />
                <Route path='/wks-select' exact render={() =>
                    <WksSelect setWorkspace={this.setWorkspace} />
                } />
                <Route path='/login' exact render={() => <Login
                    workspace={this.state.workspace}
                    wksEmail=""
                    setUserId={this.setUserId}
                />
                } />
                <Route path='/chat' exact render={() =>
                    <ChatPage
                    userId={this.state.userId} />
                } />


            </Switch>

            //<ContactList />
            /*<Profile
                user={ {userName: 'Carol Evans', userRole: 'Risk Management' }}/>*/
            /*<ChatListPage/>*/
          /*  <Chat userId={this.state.userId}/>*/
        );
    }
}

export default App;
