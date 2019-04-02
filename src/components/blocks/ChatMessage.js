import React from 'react';
import propTypes from 'prop-types'

export default class ChatMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '',
        }
    }

    messageSent() {
        this.setState = {
            status: 'sent',
        }
    }

    render() {

        const { received, text, time } = this.props

        // Blame: @leorospo
        let formattedText = text.split('<br>').map((el, index) => <span>{index ? <br></br> : null}{el}</span>)
        return (

            <div className={received ? "message-received c-w" : "message-sent c4"}>
                <div className="message-text"><span>{formattedText}</span></div>
                <div className="message-meta">
                    <div className="message-time sns-pn-410 tg5">{time}</div>
                    {received || <div className="message-status"><i className="material-icons icn-cnt-16">{this.state.status === 'sent' ? 'done' : 'scheduled'}</i></div>}
                </div>
            </div>

        )
    }
}

ChatMessage.propTypes = {
    received: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    time: propTypes.string.isRequired,

}
