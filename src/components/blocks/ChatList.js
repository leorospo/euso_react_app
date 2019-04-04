import React from 'react'
import ChatListRow from './ChatListRow'
import { logout } from '../../api';

export default class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userChats: [
                {
                    userFullName: 'Carol Evans',
                    userProfileImg: '1_carol.jpg',
                    chatLastMessage: {
                        text: 'Hello world!',
                        time: '10:30',
                    },
                    unreadCount: '5',
                    silenced: true,
                    favorited: true,

                },
                {
                    userFullName: 'Bonfiglio Alberto',
                    userProfileImg: '1_carol.jpg',
                    chatLastMessage: {
                        text: 'Hello world!',
                        time: '21:30',
                    },
                    unreadCount: '0',
                    silenced: true,
                    favorited: true,

                },
                {
                    userFullName: 'Bruni Carla',
                    userProfileImg: '1_carol.jpg',
                    chatLastMessage: {
                        text: 'Hello world!',
                        time: '18:10',
                    },
                    unreadCount: '105',
                    silenced: false,
                    favorited: false,

                },
            ],
            silenced: this.props.silenced,
            isFavoriteFilterActive: this.props.isFavoriteFilterActive,

        }
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
                {this.state.userChats.map((el, index) => <ChatListRow key={index} chat={el} onClick={() => alert('pippo')} />)}

                {/*  @TODO: MOVE TO SETTINGS */}
                <button onClick={this.handleLogout}>logout</button>
                {/* TILL HERE */}

            </div>
        )

    }
}