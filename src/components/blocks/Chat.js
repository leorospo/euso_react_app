import React from 'react';
import ChatMessage from './ChatMessage';
import ChatBar from './ChatBar'
import "./Chat.css";
import { sendMessages, getMessages } from '../../api';


export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chatMessages: [
            ],
        }
    }

    /* -------------------------------------------------------------------- */


    chatBar = document.getElementById('chat_bar')
    chatInput = document.getElementById('chat_bar_input')
    chatInputPlaceholder = <div className="">Write something...</div>
    chatArea = document.getElementById('chat-area')
    sendBtn = document.getElementById('send-btn')
    cntSingleChat = document.getElementById('cnt_single_chat')




    // Automagically scroll the chat-area when new message appear
    // TODO: Call when you receive messages
    scrollChatArea() {

        if (this.chatArea.clientHeight > this.cntSingleChat.clientHeight) {
            this.cntSingleChat.scrollTop = this.cntSingleChat.scrollHeight;
        }

    }

    // Send Messages
    sendMessage = (content) => {

        this.state.chatMessages.unshift(
            {
                received: false,
                text: content,
                time: '11:12',
            }
        )

        this.setState({
            chatMessages: this.state.chatMessages,

        })

        sendMessages(this.props.userId, this.props.chatId, content, new Date())

    }

    componentDidMount() {
        getMessages(this.props.userId, this.props.chatId, x => this.setState({ chatMessages: x }))
    }

    render() {

        //let text = el.text)

        return (
            <div id="single-chat">

                <div id="cnt_single_chat" className="cnt-single-chat g2">

                    <div id="chat-area" className="messages-cnt">

                        {this.state.chatMessages.map(el =>

                            <ChatMessage
                                received={el.received}
                                text={el.text}
                                time={el.time}
                            />
                        )}

                    </div>

                </div>

                <ChatBar sendCallback={this.sendMessage} />

            </div>
        )
    }
}