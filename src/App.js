import React, { Component } from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import WksSelect from './components/pages/WksSelect';
import ChatList from './components/blocks/ChatList';
import Login from './components/pages/Login'

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
        }
    }

    setWorkspace = (wksObj) => {
        this.setState({
            workspace: wksObj
        })
    }

    render() {

        return (

            <Switch>
                <Route path='/' exact render={() =>
                    <ChatList workspace={this.state.workspace} />
                } />
                <Route path='/wks-select' exact render={() =>
                    <WksSelect setWorkspace={this.setWorkspace} />
                } />
                <Route path='/login' exact render={() =>
                    <Login
                        workspace={this.state.workspace}
                        wksEmail=""
                    />
                } />

            </Switch>

            //<ContactList />

            /*  */
            /* <ChatPage /> */


        );
    }
}

export default App;
