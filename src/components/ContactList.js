import React from 'react'
import ContactListRow from '../components/ContactListRow'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userChats: [
                {
                    userFullName: 'Carol Evans',
                    userRole: 'Risk Management',
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
                    userRole: 'Risk Management',
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
                    userRole: 'Risk Management',
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

    render() {

        return (
            <div className="cnt-full g1">
                {this.state.userChats.map((el, index) => <ContactListRow key={index} chat={el} onClick={() => alert('pippo')} />)}
            </div>
        )

    }
}