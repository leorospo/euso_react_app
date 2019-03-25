import React, { Component } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import './style.css';


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
            <div className="App">
                {/* <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                    onClick={() => alert('pippo')}
                /> */}

                <ChatList
                    silenced={this.state.silenced}
                    isFavoriteFilterActive={this.state.isFavoriteFilterActive}
                />

            </div>
        );
    }
}

export default App;
