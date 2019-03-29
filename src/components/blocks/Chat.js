import React from 'react';
import ChatMessage from './ChatMessage'
import "./Chat.css";

export default class ChatList extends React.Component {
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
                    text: 'Here it is a very long message to test the behaviour of ours containres in every condition possible',
                    time: '11:12',
                },
            ],
        }
    }

    /* -------------------------------------------------------------------- */


    chat_bar = document.getElementById('chat_bar')
    chat_input = document.getElementById('chat_bar_input')
    chat_input_placeholder = chat_input.innerHTML
    chat_area = document.getElementById('chat-area')
    send_btn = document.getElementById('send-btn')
    cnt_single_chat = document.getElementById('cnt_single_chat')


    //Resize the chat area based on chat-bar height
    chat_bar.addEventListener("input", set_varChatBarHeight);

    set_varChatBarHeight() {
        let height = chat_bar.clientHeight
        document.documentElement.style.setProperty('--chat-bar-height', height + 'px')
    }


    //Clear on focus
    chat_input.addEventListener("focus", clear_on_focus)
    clear_on_focus() {
        if (chat_input.innerHTML == chat_input_placeholder) chat_input.innerHTML = ""
    }


    // Automagically scroll the chat-area when new message appear
    // TODO: Call when you receive messages
    scrollChatArea() {

        if (chat_area.clientHeight > cnt_single_chat.clientHeight) {
            cnt_single_chat.scrollTop = cnt_single_chat.scrollHeight;
        }


    }

    // Send Messages
    send_btn.addEventListener("click", send_message);

    send_message() {

        let content = chat_bar_input.innerHTML
        br_remove()

        function br_remove() {
            if (content.endsWith('<br>')) {
                content = content.substring(0, content.lastIndexOf('<'))
                br_remove()
            }

        }

        if (content != '') {
            var message = document.createElement('div')
            message.className = 'message-sent c4'
            message.innerHTML = `<div class="message-text"><span>` + content + `</span></div>
                    <div class="message-meta">
                            <div class="message-time sns-pn-410 tg5">13:00</div>
                            <div class="message-status"><i class="material-icons icn-cnt-16">done</i></div>
                    </div>`
            chat_area.prepend(message)


        }

        chat_bar_input.innerHTML = ""
        set_varChatBarHeight()

        scrollChatArea()

    }




    /* -------------------------------------------------------------------- */


    render() {

        return (
            <div id="single-chat">

                <div id="cnt_single_chat" className="cnt-single-chat g2">

                    <div id="chat-area" className="messages-cnt">

                        {this.state.chatMessages.map(el =>

                            <ChatMessage
                                received={el.received}
                                text={el.text}
                                time={el.time}
                            />)}

                    </div>

                </div>


                <div id="chat_bar" className="cnt-chat-bar g1">

                    <div className="icn-cnt-44 tg3">
                        <i className="material-icons mood">mood</i>
                    </div>

                    <div id="chat_bar_input" className="chat-bar sns-sp-414 tg5 ffox-hide-scrollbarbar" contentEditable="true">
                        <div className="">Write something...</div>
                    </div>

                    <div className="icn-cnt-44 tg3">
                        <i className="material-icons attach_file">attach_file</i>
                    </div>

                    <div id="send-btn" className="btn chat-bar-send-btn icn-cnt-44 tFF">
                        <i className="material-icons send">send</i>
                    </div>

                </div>

            </div>)

    }
}