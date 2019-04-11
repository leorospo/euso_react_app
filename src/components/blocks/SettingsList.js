import React from 'react'
import SettingsListRow from './SettingsListRow'

export default class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: [
                {
                    text: "Profile",
                    icon: "account_circle"
                },
                {
                    text: "Notification Settings",
                    icon: "notifications_active"
                },
                {
                    text: "Logout",
                    icon: "exit_to_app"
                },
            ]
        }
    }

    render() {

        return (
            <div className="cnt-full g1">
                {this.state.settings.map((el, index) => <SettingsListRow key={index} settings={el} />)}
            </div>
        )

    }
}