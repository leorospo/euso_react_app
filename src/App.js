import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import WksSelect from './components/pages/WksSelect';
import Login from './components/pages/Login';
import ChatPage from './components/pages/ChatPage';
import ChatListPage from './components/pages/ChatListPage';
import ContactListPage from './components/pages/ContactListPage';
import ResetPassword from './components/pages/ResetPassword';
import Profile from './components/pages/Profile';
import { getUsers } from './api'
import './style.css';
import Settings from './components/pages/Settings';


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
            users: undefined,
            group: true,
        }
    }

    componentDidMount = () => {
        this.setUsers()
    }

    setUsers = () => {
        getUsers().then((users) =>
            this.setState({
                users: users
            })
        )
    }

    setWorkspace = (wksObj) => {
        this.setState({
            workspace: wksObj,
        });
    }

    setUserId = (id, cb) => {
        this.setState({
            userId: id
        }, cb)
    }

    selectGroup = () => {
        this.setState({
            group: true,
        })
    }

    selectContact = () => {
        this.setState({
            group: false,
        })
    }
    
    render() {

        if (!this.state.userId) {
            return (
                <Switch>
                    <Route path='/wks-select' exact render={() =>
                        <WksSelect setWorkspace={this.setWorkspace} />
                    } />
                    <Route path='/login' exact render={() =>
                        <Login
                            workspace={this.state.workspace}
                            wksEmail=""
                            setUserId={this.setUserId}
                        />
                    } />
                    <Route path='/resetpwd' exact render={() =>
                        <ResetPassword
                            workspace={this.state.workspace}
                            wksEmail=""
                        />
                    } />
                    <Route path='/' exact render={() => (
                        !this.state.workspace ? (
                            <Redirect to="/wks-select" />
                        ) : (
                                <Redirect to="/login" />
                            )
                    )
                    } />
                </Switch>
            )
        }

        return (

            <Switch>
                <Route path='/' exact render={() =>
                    <ChatListPage
                        workspace={this.state.workspace}
                        userId={this.state.userId}
                        users={this.state.users}
                        setUsers={this.setUsers}
                        selectGroup={this.selectGroup}
                        selectContact={this.selectContact}
                    />
                } />
                <Route path='/wks-select' exact render={() =>
                    <WksSelect setWorkspace={this.setWorkspace} />
                } />
                <Route path='/login' exact render={() =>
                    <Login
                        workspace={this.state.workspace}
                        wksEmail=""
                        setUserId={this.setUserId}
                    />
                } />
                <Route path='/contacts' exact render={() =>
                    <ContactListPage
                        group={this.state.group}
                    />
                } />
                <Route path='/settings' exact render={() =>
                    <Settings />
                } />
                <Route path='/chat/:id' exact render={props =>
                    <ChatPage
                        chatId={props.match.params.id}
                        userId={this.state.userId}
                    />
                } />


            </Switch>

        );
    }
}

export default App;