import React from 'react';
import ListHeader from '../blocks/ListHeader';
import ContactList from '../blocks/ContactList';

export default class ChatListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "contact",
        }
    }
    render() {
        const {  } = this.props;

        return (
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ListHeader
                        page={this.state.page}
                    />

                    <ContactList
                        group={this.props.group}
                        selectChat={false}
                    />

                </div>
                <div className="cnt-section-right"></div>
            </div>
        )
    }
}