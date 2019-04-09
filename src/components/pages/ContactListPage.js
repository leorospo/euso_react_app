import React from 'react';
import ListHeader from '../blocks/ListHeader';
import ContactList from '../blocks/ContactList';

export default class ChatListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { } = this.props;

        return (
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ListHeader
                        page={"contact"}
                    />

                    <ContactList users={this.props.users} userId={this.state.userId} />

                </div>
                <div className="cnt-section-right"></div>
            </div>
        )
    }
}