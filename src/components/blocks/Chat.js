import React from 'react';
import "./Chat.css";

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

    render() {

        return (
            <div id="single-chat">

                <div id="cnt_single_chat" className="cnt-single-chat g2">

                    <div id="chat-area" className="messages-cnt">

                        <div className="message-sent c4">
                            <div className="message-text"><span>Hey there!</span></div>
                            <div className="message-meta">
                                <div className="message-time sns-pn-410 tg5">13:56</div>
                                <div className="message-status"><i className="material-icons icn-cnt-16">schedule</i></div>
                            </div>
                        </div>

                        <div className="message-sent c4">
                            <div className="message-text"><span>Hey there! Here it is a very long message to test the behaviour of ours containes a a a under ant circumstances</span></div>
                            <div className="message-meta">
                                <div className="message-time sns-pn-410 tg5">13:50</div>
                                <div className="message-status"><i className="material-icons icn-cnt-16">done</i></div>
                            </div>
                        </div>

                        <div className="message-sent c4">
                            <div className="message-text"><span>Hey there!</span></div>
                            <div className="message-meta">
                                <div className="message-time sns-pn-410 tg5">13:00</div>
                                <div className="message-status"><i className="material-icons icn-cnt-16">done</i></div>
                            </div>
                        </div>

                        <div className="message-sent c4">
                            <div className="message-text"><span>Hey there! Here it is a very long message to test the behaviour of ours containes</span></div>
                            <div className="message-meta">
                                <div className="message-time sns-pn-410 tg5">12:00</div>
                                <div className="message-status"><i className="material-icons icn-cnt-16">done</i></div>
                            </div>
                        </div>

                        <div className="message-received c-w">
                            <div className="message-text"><span>Hey there! Here it is a very long message to test the behaviour of ours containes</span></div>
                            <div className="message-meta">
                                <div className="message-time sns-pn-410 tg5">12:00</div>
                            </div>
                        </div>

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