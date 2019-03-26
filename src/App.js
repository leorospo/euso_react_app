import React, { Component } from 'react';
import './style.css';
import WksSelect from './components/pages/WksSelect';


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
            <WksSelect />
        );
    }
}

export default App;
