import React from 'react';
//import propTypes from 'prop-types';
import ChatHeader from './../blocks/ChatHeader'
import Chat from '../../components/blocks/Chat';


export default class ChatPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (

            <div className="cnt-global">

                <div className="cnt-section-left">

                    <ChatHeader />

                    <Chat 
                     userId={this.props.userId}
                    />
                    
                </div>

                <div className="cnt-section-right"></div>
            </div>

        );
    }
}
