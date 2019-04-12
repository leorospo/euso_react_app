import React from 'react';
import Header from "../blocks/Header"
import SettingsList from "../blocks/SettingsList"

export default class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="cnt-global">
                <div className="cnt-section-left">

                    <Header />

                    <div className="cnt-full g1">
                        <SettingsList />
                    </div>

                </div>

                <div class="cnt-section-right"></div>
            </div>
        )
    }
}