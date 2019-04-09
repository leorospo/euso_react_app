import React from 'react'
import ChatListRow from './ChatListRow'
import { logout, getUserChats } from '../../api';

export default class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userChats: [],
            silenced: this.props.silenced,
            isFavoriteFilterActive: this.props.isFavoriteFilterActive,

        }
    }

    componentDidMount = () => {
        getUserChats(
            'wks',
            this.props.userId,
            (data) => { this.setState({ userChats: data }) },
            this.props.users
        )
    }

    // TODO: MOVE TO SETTINGS
    handleLogout = () => {
        logout().then(() => {
            console.info('logout')
        }).catch((error) => {
            console.error('Logout failed', error)
        });
    }
    // TILL HERE

    render() {

        return (
            <div className="cnt-full g1">
                {this.state.userChats.map((el, index) => <ChatListRow key={index} chat={el} />)}

                {/* @TODO: MOVE TO SETTINGS */}
                {<button onClick={this.handleLogout}>logout</button>}
                {/* TILL HERE */}

            </div>
        )

    }
}