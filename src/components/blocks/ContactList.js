import React from 'react'
import ContactListRow from './ContactListRow'
import Search from './Search'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userChats: this.props.users,
            silenced: this.props.silenced,
            isFavoriteFilterActive: this.props.isFavoriteFilterActive,
            selectChat: false
        }
    }

    render() {
        return (

            < div className="cnt-full g1" >
                {!this.state.selectChat ?
                    Object.entries(this.state.userChats).map(([id, obj]) => <ContactListRow key={id} chat={obj} chatId={id} onClick={() => alert('pippo')} />) :
                    Object.entries(this.state.userChats).map(([id, obj]) => <ContactListRow key={id} chat={obj} chatId={id} />)
                }
            </div>

        )

    }
}