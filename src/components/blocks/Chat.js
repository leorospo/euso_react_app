import React from 'react';
import ChatMessage from './ChatMessage';
import ChatBar from './ChatBar'
import "./Chat.css";
import { sendMessages } from '../../api';

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chatMessages: [
                {
                    received: true,
                    text: 'Hey there!',
                    time: '10:30',
                },
                {
                    received: false,
                    text: 'Hey!',
                    time: '10:31',
                },
                {
                    received: true,
                    text: 'Here it is a very long message to test the behaviour of ours containres in every condition possible<br>A capo',
                    time: '11:12',
                },
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

        sendMessages(this.props.userId, this.props.chatId,content,new Date())



        //this.chatBar_input.innerHTML = ""
        //this.set_varChatBarHeight()

        //this.scrollChatArea()

    }




    /* -------------------------------------------------------------------- */


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
                                chatId={el.chatId}
                            />)}

                    </div>

                </div>

                <ChatBar sendCallback={this.sendMessage} />

            </div>
        )
    }
}